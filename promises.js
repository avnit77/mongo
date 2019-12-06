const fetch = require('node-fetch');

// if then returns a promise the next then doesn't fire until the promise resolves
// if then returns a value the next then fires with the returned value as its fulfilledValue
function getQuotes() {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes')
    .then(res => res.json())
}

// always returns a promise
async function getQuotesAsync() {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  return res.json();
}

console.log(getQuotesAsync());

// getQuotesAsync()
//   .then(result => {
//     console.log(result);
//   });

// const promiseToGiveQuotes = getQuotes();
// promiseToGiveQuotes
//   .then(quotes => {
//     console.log(quotes);
//     return 'Yup';
//   })
//   .then(results => {
//     console.log('and after', results);
//   });

// promise
//   .then(fulfilledValue => {})

module.exports = {
  getQuotes
}
