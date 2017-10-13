const api = require('express')();
//const rate_limiter = require('express-rate-limit');
/* your code here */

module.exports = api;


// Rate limiter should return an error property, I don't know why it didnt' work

// let apiLimiter = new rate_limiter({
//   windowMs: 15*60*1000, // 15 minutes
//   max: 10,
//   messsage: { error: ''}
// });

let maxRequest = 0;

api.get('/food', (req, res) => {
  if (maxRequest >= 10) {
    res.send({ error: 'error' })
  } else {
    maxRequest++;
    res.send({ food: 'Food' });
  }
});

api.get('/drink', (req, res) => {
  if (maxRequest >= 10) {
    res.send({ error: 'error' })
  } else {
    maxRequest++;
    res.send({ drink: 'Drink' });
  }
});

api.get('/tv', (req, res) => {
  if (maxRequest >= 10) {
    res.send({ error: 'error' })
  } else {
    maxRequest++;
    res.send({ tv: 'tv' });
  }
});
