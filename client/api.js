// making the code work both in the browser and node.js
if (typeof global === 'undefined') {
  global = window;
}

/* write your code here */

const getRequest = (route) => {
  return global.fetch(`${route}`);
};

const getAll = () => {
  const { food, drink, tv } = {
    food: getRequest(`/food`),
    drink: getRequest(`/drink`),
    tv: getRequest(`/tv`)
  };
  return Promise.all([food, drink, tv]);
}
// define the api-client object to be exported
const api = {};
api.go = {};

api.get = (route) => {
  return getRequest(route);
};

api.get.me = (route) => {
  return getRequest(route);
};

api.get.me.a = (route) => {
  return getRequest(route);
};


api.get.me.everything = (something) => {
  return getAll();
};


api.go.get = (route) => {
  return getRequest(route);
};

api.go.get.me = (route) => {
  return getRequest(route);
};

api.go.get.me.a = (route) => {
  return getRequest(route);
};

api.go.get.me.everything = () => {
  return getAll();
};

// making the code work both in the browser and node.js
if (typeof module !== 'undefined') { module.exports = api; }
if (typeof window !== 'undefined') { window.api = api; }
