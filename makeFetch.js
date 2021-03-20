const fetch = require('node-fetch')

async function makeFetch({ url, ...params }) {
  return fetch(url, params)
    .then(res => res.text())
    .then(body => body)
}

module.exports = makeFetch