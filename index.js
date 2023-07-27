const express = require("express");
const bodyParser = require('body-parser'); 
const mongoose = require("mongoose");
const EmpleadosRouter = require("./routes/routes.js");

const app = express();
app.use(express.json());
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({
    extended: true
})); 

mongoose.connect("mongodb://127.0.0.1:27017/empleados");

app.use(EmpleadosRouter);

app.listen(3000, () => {
  console.log("Server is running...");
});