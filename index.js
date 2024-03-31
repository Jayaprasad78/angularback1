const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
app.use(cookieParser());
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
app.use(express.static('public'));

app.use(
  cors({
    origin: 'https://angularback1.vercel.app',
    methods: ["POST", "GET"],
    credentials: true
  })
);


const port = process.env.PORT;

require('./db/conn');
require('./userschema/userschema');
app.use(express.json());

app.get('/', (req, res) => {
  res.send("hi hello");
});

app.use(require('./router/auth'));

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
