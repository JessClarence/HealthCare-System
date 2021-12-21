const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');



const app = express();

dotenv.config({path:'config.env'})
const port = process.env.port || 8080;


app.set('view engine', 'ejs');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));

app.get('/', (req, res)=>{
    res.render("landingPage");
});


app.get('/dashboard', (req,res)=>{
    res.render("home");
});
app.get('/viewDoctor', (req,res)=>{
    res.render("viewDoctor");
});
app.get('/addDoctor', (req,res)=>{
    res.render("addDoctor");
});


app.get('/member-view-doctor', (req,res)=>{
    res.render("./member/memberViewDoctor");
});
app.get('/member-request-chat', (req,res)=>{
    res.render("./member/memberRequestChat");
});


app.get('/doctor-details', (req,res)=>{
    res.render("./doctor/details");
});
app.get('/doctor-request-chat', (req,res)=>{
    res.render("./doctor/doctorRequestChat");
});
app.get('/doctor-view-user', (req,res)=>{
    res.render("./doctor/viewUser");
});




app.post('/sign-In', (req, res)=>{
    res.render("signIn");
});
app.post('/dashboard', (req, res)=>{
    res.render("home");
});
app.post('/member-view-doctor', (req, res)=>{
    res.render("./member/memberViewDoctor");
});
app.post('/doctor-details', (req, res)=>{
    res.render("./doctor/details");
});


app.listen(port, ()=>{
    console.log(`...port is running at ${port}`);
});