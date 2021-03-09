const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // hopefully the last project I will use MySQL with!
const path = require('path');
const app = express(); // using this for the MERN stack, later

const {getHomePage, getContactPage} = require('./routes/index');
const {addSpotPage, addSpot, deleteSpot, editSpot, editSpotPage, viewSpot} = require('./routes/spot');
const port = 5000; // change if required

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'latelist'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app

// GETs
app.get('/', getHomePage);
app.get('/add', addSpotPage);
app.get('/view/:id', viewSpot);
app.get('/edit/:id', editSpotPage);
app.get('/delete/:id', deleteSpot);
app.get('/contact', getContactPage);
// POSTs
app.post('/add', addSpot);
app.post('/edit/:id', editSpot);



// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});