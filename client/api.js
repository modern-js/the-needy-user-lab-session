// making the code work both in the browser and node.js
if (typeof global === 'undefined') {
  global = window;
}

/* write your code here */

const get = (parameter) => {
  return global.fetch("localhost:8053/tv");
};

get.me = (parameter) => {
  return global.fetch("localhost:8053/tv");
};

get.me.a = (parameter) => {
  return global.fetch("localhost:8053/tv");
};

get.me.everything = () => {};

const go = () => {};

go.get = get;

go.get.me.everything = () => {
  return Promise.all([global.fetch("localhost:8053/tv"), global.fetch("localhost:8053/drink"), global.fetch("localhost:8053/food")]);
};

// define the api-client object to be exported
const api = {
  get,
  go
};

// making the code work both in the browser and node.js
if (typeof module !== 'undefined') { module.exports = api; }
if (typeof window !== 'undefined') { window.api = api; }
