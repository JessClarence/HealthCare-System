const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const axios = require('axios');


const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path:'config.env'})
const port = process.env.PORT || 8080;


app.set('view engine', 'ejs');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));

//MongoDB connection
connectDB();



app.use('/', require('./server/routes/router'));

// LANDING PAGE WHERE LOGIN BUTTONS CHANGE TO THE SIGN IN DIRECTORY
app.post('/sign-In', (req, res)=>{
    res.render("./signIn/signIn");
});

app.post('/admin-signIn', (req,res)=>{
    res.render('./signIn/signIn-admin');
});


// DIRECTS TO MEMBER'S UI
app.post('/member-signIn', (req, res)=>{
    res.render("./signIn/signIn-member");
});

// DIRECTS TO ADMIN'S UI
app.post('/dashboard', (req, res)=>{
    let one = 'http://localhost:3000/api/users';
    let two = 'http://localhost:3000/api/uses';

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);

    axios.all([requestOne, requestTwo])
        .then(axios.spread((...responses) => { 
            const responseOne = responses[0]
            const responseTwo = responses[1]

            res.render('home', {users: responseOne.data, uses: responseTwo.data});
        }))
        .catch( err =>{
            res.send(err);
        })
});

// DIRECTS TO DOCTOR'S UI
app.post('/doctor-signIn', (req, res)=>{
    res.render("./signIn/signIn-doctor");
});


app.post('/member-view-doctor', (req, res)=>{
    axios.get('http://localhost:3000/api/users')
        .then(function(response){  
            res.render('./member/memberViewDoctor', {users: response.data});
        })
        .catch( err =>{
            res.send(err);
        })
});


app.post('/doctor-details', (req, res)=>{
    res.render("./doctor/details");
});




app.listen(port, ()=>{
    console.log(`...port is running at ${port}`);
});