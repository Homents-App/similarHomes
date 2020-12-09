import http from 'k6/http';
import { sleep } from 'k6';

// init code - once per vu

//// Change vus and duration
// export let options = {
//   vus: 100,
//   duration: '30s',
// };



//// Ramp vus and duration up and down
// export let options = {
//   stages: [
//     { duration: '30s', target: 20 },
//     { duration: '1m30s', target: 10 },
//     { duration: '20s', target: 0 },
//   ],
// };


export let options = {
  stages: [
    { duration: '2m', target: 100 }, // below normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.
  ],
};


export default function () {
  // vu code - repeated
  http.get('http://localhost:3001/api/new-listings');
  sleep(1);
}

