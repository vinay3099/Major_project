const express = require('express');
const  mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const morgan = require('morgan');



dotenv.config({path:'config.env'})
const PORT= process.env.PORT||8000;
const url = "mongodb://localhost/pmsdb"

//mongo db connection
mongoose.connect(url,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})

const con=mongoose.connection;
con.on('open',()=>{
    console.log(" connected to mongodb");
})

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")
//loading assets
app.use('/css',express.static(path.resolve(__dirname,'Assets/css')));
app.use('/img',express.static(path.resolve(__dirname,'Assets/img')));
app.use('/js',express.static(path.resolve(__dirname,'Assets/js')));

//log type of request in console
app.use(morgan('tiny'));


//load routes
app.use('/',require('./server/routes/router'))


app.listen(PORT ,()=>{
    console.log("server started on port: "+PORT)
})
