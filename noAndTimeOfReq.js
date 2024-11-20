const express = require("express");
const app = express();

let numberOfReq = 0;

function countReq(req, res, next) {
  numberOfReq++;
  console.log(numberOfReq);
  next();
}

app.get("/health-checkup",countReq,
  function(res, req) {
    console.time('handler name');
    //...handle request
    console.timeEnd('handler name');
  }
);

app.listen(3000);