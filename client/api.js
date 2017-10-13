// making the code work both in the browser and node.js
if (typeof global === 'undefined') {
  global = window;
}
/* write your code here */

const get = something => {
  return global.fetch(`/${something}`);
};

get.me = something => {
  return global.fetch(`/${something}`);
};

get.me.everything = () => {
  const {food, drink, tv} = {food: global.fetch(`/food`),
    drink: global.fetch(`/drink`),
    tv: global.fetch(`/tv`)};
  return Promise.all([food, drink, tv]);
};


get.me.a = something => {
  return global.fetch(`/${something}`);
};


// define the api-client object to be exported
const api = {
  get: get,
  go: { get: get}
};

// making the code work both in the browser and node.js
if (typeof module !== 'undefined') { module.exports = api; }
if (typeof window !== 'undefined') { window.api = api; }
