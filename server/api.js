const api = require('express')();

let requestsCount = 0;

api.use((req, res, next) => {
    requestsCount += 1;

    if (requestsCount > 10) {
        res.send({error: 'You cannot make more than 10 requests!'});
    } else {
        next();
    }
});

api.get('/food', (req, res) => {
    res.send({food: 'banana'});
});

api.get('/drink', (req, res) => {
    res.send({drink: 'soda'});
});

api.get('/tv', (req, res) => {
    res.send({tv: 'btv'});
});

module.exports = api;
