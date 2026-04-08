// Import the http module to make HTTP requests. From this point, you can use `http` methods to make HTTP requests.
import http from 'k6/http';

// Import the sleep function to introduce delays. From this point, you can use the `sleep` function to introduce delays in your test script.
import { sleep } from 'k6';
export const options = {
    iterations:2,
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
 console.log(resposta.status);
 console.log(resposta.body);


  sleep(1);
}
