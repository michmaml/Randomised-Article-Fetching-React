/**
 * Michal J Sekulski, 2020
 */

import axios from 'axios';

// definition of the base link, technically could be omitted and included in App.js
// but I wanted to make it a bit more readable

export default axios.create({
  baseURL: 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data'
});