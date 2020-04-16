const express = require ('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require ('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require ('./config/database');

//connect to the databse
mongoose.connect(config.database);

//database is on
mongoose.connection.on('connected', ()=>{
    console.log('databse is connected'); 
 });
 
//check database error
mongoose.connection.on('error', (err)=>{
   console.log('database error:'+err); 
});

const app = express();

const port = process.env.PORT || 8080;

const users = require('./routes/users');

//cors middleware
app.use(cors());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//set static folder
app.use(express.static(path.join(__dirname, 'interface')));

//bode parser middleware
app.use(bodyParser.json());

app.use('/users',users);

app.get('/', (req,res)=>{
    res.send('sendin invalin');
});

app.listen(port, () =>{
    console.log('server started at port'+port);
});
