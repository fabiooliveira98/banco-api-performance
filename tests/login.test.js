// Import the http module to make HTTP requests. From this point, you can use `http` methods to make HTTP requests.
import http from 'k6/http';

// Import the sleep function to introduce delays. From this point, you can use the `sleep` function to introduce delays in your test script.
import { sleep,check } from 'k6';


export const options = {
    //iterations:50,
    vus: 10,
    duration: '30s',
    thresholds:{
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.01'],   
       }
}

export default function () {

 const url = 'http://localhost:3000/login';
 const payload = JSON.stringify({

    username: 'julio.lima',
    senha: '123456',

  });

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
