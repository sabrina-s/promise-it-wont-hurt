var HTTP = require("q-io/http");

HTTP.read("http://localhost:7000")
  .then((response) => {
    return HTTP.read(`http://localhost:7001/${response}`);
  })
  .then((response) => console.log(JSON.parse(response)));
