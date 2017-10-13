const api = require('express')();

/* your code here */

let totalRequests = 0;

api.get('/food', (req, res) => {

    if(totalRequests >= 10){
        res.send({ error: 4 })
    } else {
        totalRequests++;
        res.send({ food: 1 });
    }
    
});

api.get('/drink', (req, res) => {
    
    if(totalRequests >= 10){
        res.send({ error: 4 })
    } else {
        totalRequests++;
        res.send({ drink: 2 });
    }
});

api.get('/tv', (req, res) => {
    
    if(totalRequests >= 10){
        res.send({ error: 4 })
    } else {
        totalRequests++;
        res.send({ tv: 3 });
    }
});

module.exports = api;
