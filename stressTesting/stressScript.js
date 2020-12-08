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



export default function () {
  // vu code - repeated
  http.get('http://localhost:3001/api/new-listings');
  sleep(1);
}

