// let firstPromise = first();
// let secondPromise = firstPromise.then(value => second(value));
// secondPromise.then(console.log);

first()
  .then((value) => second(value))
  .then(console.log);
