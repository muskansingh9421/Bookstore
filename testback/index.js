const express = require("express");

const app = express();

const port = 6000;

app.get("/", (req,res) => {
  return res.send("home page");
});

const admin = (req, res) => {
  return res.send("this is admin dashboard");
};

const isAdmin= (req, res, next) => {
  console.log("isAdmin is running")
  next();
};

app.get("/admin", isAdmin, admin);

app.get('/login', (req,res) => {
  return res.send('you are visiting login route');
});

app.get('/signup', (req,res) => {
  return res.send('you are visiting signin route');
});

app.listen(port, () => {
  console.log("server is up and running......");
});