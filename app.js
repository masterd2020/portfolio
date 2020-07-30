const path = require("path");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require('cookie-parser');
const compression = require('compression');

const userRoute = require("./routes/userRoute");
const viewRoute = require("./routes/viewRoute");

// Setup Express app
const app = express();


// Middleware
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Logging Middleware
app.use(morgan('dev'));

// Http headers
app.use(helmet());

// Parsing incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Nosql injection
app.use(mongoSanitize());

// xss 
app.use(xss());

// Compression
app.use(compression());
/*
app.use((req, res) => {
  console.log("REQUEST", req);
  console.log("RESPONSE", res);
});*/

// Mounting
app.use("/", viewRoute);
app.use("/api/v1/users", userRoute);
app.all("*", (req, res, next) => {
  
  res.status(500).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server`
  })
})

module.exports = app;