// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware-Dependencies*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false,
})
);

app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
app.use(express.json({ limit: '2mb' }));

// Setup Server
const port = 3000;

// Spin up the server
const server = app.listen(port, listening);
//test if working
function listening() {
    console.log("server running");
    console.log(`running on localhost ${port}`);
  }

  // Callback function to complete GET '/all'
  app.get("/all", (req, res) => {
  res.send(projectData);
  console.log(projectData);
});

// POST Route
app.post("/show", (req, res) => {
  console.log(req.body);

  projectData.temp = req.body.temp;
  projectData.date = req.body.date;
  projectData.content = req.body.content;

  res.send(projectData);
 console.log(projectData);
});

  

// STEPS TO INSALL
//1. Node already installed on machine
//2. npm init
//3. npm install express
//4. npm install nodemon  
//4.2 FOR NODEMON permission Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
//5. npm install
//6 INSTALL MIDDLEWARE
// 7. npm install body-parser
// 8  npm install cors
