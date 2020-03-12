/**
 * Michal J Sekulski, 2020
 */

import axios from 'axios';


// This runtion takes the ranking and submits it to the /rankingServer/ranking.
// (up) this file pretends to be a server, where data can be sent to.


export default (rankedArticles) => {
  axios.post('http://localhost:3000/ranking', {
    id: new Date(),
    rankedArticles: { rankedArticles }
  })
    // these are not necessary in the built version
    .then(resp => {
      console.log(resp.data);
    }).catch(error => {
      console.log(error);
    });
};
