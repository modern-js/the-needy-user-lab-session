const api = require('express')();
const rate_limiter = require('express-rate-limit');
/* your code here */

module.exports = api;

let apiLimiter = new rate_limiter({
  windowMs: 15*60*1000, // 15 minutes
  max: 10,
  messsage: { error: ''}
});

api.get('/food', apiLimiter, (req, res) => {
  res.send({ food: 'Food' });
});

api.get('/drink', apiLimiter, (req, res) => {
  res.send({ drink: 'Drink' });
});

api.get('/tv', apiLimiter, (req, res) => {
  res.send({ tv: 'tv' });
});
