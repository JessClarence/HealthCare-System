const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

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




app.post('/sign-In', (req, res)=>{
    res.render("signIn");
});
app.post('/dashboard', (req, res)=>{
    res.render("home");
})

app.listen(port, ()=>{
    console.log("...port is running");
});