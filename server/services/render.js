const axios = require('axios');


exports.homeRoutes = (req, res)=>{
    res.render("landingPage");
}

exports.memberSignIn = (req, res) =>{
    res.render("./signIn/signIn-member");
}

exports.adminDashboard = (req,res) =>{

    axios.get('http://localhost:3000/api/users')
        .then(function(response){ 
            res.render('home', {users: response.data});
        })
        .catch( err =>{
            res.send(err);
        })
}


exports.adminViewDoctor = (req,res)=>{
     axios.get('http://localhost:3000/api/uses')
        .then(function(response){ 
            res.render('viewDoctor', {uses: response.data});
        })
        .catch( err =>{
            res.send(err);
        })
}

exports.adminAddDoctor = (req,res)=>{
    
    axios.get('http://localhost:3000/api/uses')
        .then(function(response){ 
            res.render('addDoctor', {users: response.data});
        })
        .catch( err =>{
            res.send(err);
        })
}

exports.updateUser = (req,res)=>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        res.render("update_user", { user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.adminSignIn = (req,res)=>{
    res.render('./signIn/signIn-admin');
}


exports.memberViewDoctor = (req,res)=>{
    axios.get('http://localhost:3000/api/uses')
        .then(function(response){ 
            res.render('./member/memberViewDoctor', {uses: response.data});
        })
        .catch( err =>{
            res.send(err);
        })
}

exports.memberRequestChat = (req,res)=>{
    res.render("./member/memberRequestChat");
}


exports.doctorSignIn = (req,res)=>{
    res.render('./signIn/signIn-doctor');
}

exports.doctorDetail = (req,res)=>{
    res.render("./doctor/details");
}

exports.doctorRequestChat = (req,res)=>{
    res.render("./doctor/doctorRequestChat");
}

exports.doctorViewUser = (req,res)=>{
    axios.get('http://localhost:3000/api/users')
        .then(function(response){ 
            res.render('doctor/viewUser', {use: response.data});
        })
        .catch( err =>{
            res.send(err);
        })
}