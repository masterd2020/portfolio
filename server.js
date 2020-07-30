const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = require("./app");

dotenv.config({path: './config.env'});



//Database Connection
const DB = process.env.DATABASE_STRING;
//const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(con => {
  console.log("DB Connection successful");
  //console.log(con.connections);
}).catch(err => {
  console.log('Error 💥', err);
});

const port = process.env.PORT || 3000;

// Starting the server
const server = app.listen(3000, () => {
  console.log('Now Listening to port 3000...');
});