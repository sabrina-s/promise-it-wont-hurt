var promiseSuccess = Promise.resolve("SUCCESS");
promiseSuccess.then(console.log);

var promiseFail = Promise.reject(new Error("FAIL"));
promiseFail.catch(console.error);
