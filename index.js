const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
app.use(cookieParser());
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
app.use(express.static('public'));

app.use(function (req, res, next) {
  // Enabling CORS
  res.header("Access-Control-Allow-Origin", "https://angular-demo-eight.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});



const port = process.env.PORT;

require('./db/conn');
require('./userschema/userschema');
app.use(express.json());

app.get('/', (req, res) => {
  res.send("hi hello");
});
app.get('/jp', (req, res) => {
   res.send("hi jp");
  // console.log("enterd")
//  return res.status(201).send("ok");
});

app.use(require('./router/auth'));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
