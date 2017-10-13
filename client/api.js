// making the code work both in the browser and node.js
if (typeof global === 'undefined') {
  global = window;
}

/* write your code here */



// define the api-client object to be exported
const api = {};

api.get = (something) => {
  return global.fetch(`/${something}`);
};

api.get.me = (something) => {
  return global.fetch(`/${something}`);
};

api.get.me.a = (something) => {
  return global.fetch(`/${something}`);
};


api.get.me.everything = (something) => {
  const {food, drink, tv} = {food: global.fetch(`/food`),
                             drink: global.fetch(`/drink`),
                             tv: global.fetch(`/tv`)};
  return Promise.all([food, drink, tv]);
};

api.go = {};

api.go.get = (something) => {
  return global.fetch(`/${something}`);
};

api.go.get.me = (something) => {
  return global.fetch(`/${something}`);
};

api.go.get.me.a = (something) => {
  return global.fetch(`/${something}`);
};

api.go.get.me.everything = () => {
  const {food, drink, tv} = {food: global.fetch(`/food`),
                             drink: global.fetch(`/drink`),
                             tv: global.fetch(`/tv`)};
  return Promise.all([food, drink, tv]);
};

// making the code work both in the browser and node.js
if (typeof module !== 'undefined') { module.exports = api; }
if (typeof window !== 'undefined') { window.api = api; }
