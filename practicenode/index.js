var express = require('express');
var app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

require('body-parser');

var port = 3000;

//connect to mongodb
require('./database/db');
require("./services/sevices");


//initialize routes
var tasks = require("./routes/tasks");
app.use(tasks);


// Set Static Folder
app.use(express.static('practice'));



app.listen(port, function(){
    console.log('Server started on port '+port);
});