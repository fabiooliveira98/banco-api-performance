
import http from 'k6/http';
import {pegarBaseUrl} from '../utils/variaveis.js';
import { sleep,check } from 'k6';

const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export const options = {
    //iterations:50,
    //vus: 10,
    //duration: '30s',
    stages:[
      {duration:'10s',target:10},
      {duration:'20s',target:20},
      {duration:'10s',target:30},
      {duration:'20s',target:30},
      {duration:'20s',target:0},
    ],
    thresholds:{
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.01'],   
       }
}

export default function () {

 const url = pegarBaseUrl() + '/login';
 const payload = JSON.stringify(postLogin);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

 const resposta = http.post(url, payload, params);
  check(resposta, {  
      'Status é 200': (r) => r.status === 200, 
       'token é string': (r) => typeof r.json().token === 'string',});


  sleep(1);
}
// $env:K6_WEB_DASHBOARD="true"; $env:K6_WEB_DASHBOARD_EXPORT="html-report.html"; k6 run .\tests\login.test.js