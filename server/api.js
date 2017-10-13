const api = require('express')();

/* your code here */

let totalRequests = 0;
let rateLimit = 10

api.get('/food', (req, res) => {
  if(totalRequests >= rateLimit){
    res.send({ error: 404 })
  } else {
    totalRequests++;
    res.send({ food: "food" });
  }

});

api.get('/drink', (req, res) => {
  if(totalRequests >= rateLimit){
    res.send({ error: 404 })
  } else {
    totalRequests++;
    res.send({ drink: "drink" });
  }
});

api.get('/tv', (req, res) => {
  if(totalRequests >= rateLimit){
    res.send({ error: 404 })
  } else {
    totalRequests++;
    res.send({ tv: "tv"});
  }
});

module.exports = api;