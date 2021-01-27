var promise = new Promise(function (fulfill, reject) {
  setTimeout(() => {
    reject(new Error("REJECTED!"));
  }, 300)
});

function onReject(error) {
  console.log(error.message);
}

function onFulfill(response) {
  console.log(response);
}

promise
  .then(onFulfill, onReject)
