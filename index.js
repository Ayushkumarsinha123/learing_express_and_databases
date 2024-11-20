const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res){
  // do health check
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password =  req.headers.password;

  if(username != "ayush" || password != "123") {
    res.status(403).json ({
      "msg" : "wrong user"
    });
    return;
  }

  if(kidneyId != 1 || kidneyId != 2) {

    res.status(411).json ({
      "msg" : "wrong input"
    })
    return;
  }

  // do something with kidney
  res.send("your heart is fine")
}); 


