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
    res.render("viewDoctor");
}

exports.adminAddDoctor = (req,res)=>{
    res.render("addDoctor");
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

exports.memberViewDoctor = (req,res)=>{
    res.render("./member/memberViewDoctor");
}

exports.memberRequestChat = (req,res)=>{
    res.render("./member/memberRequestChat");
}

exports.doctorDetail = (req,res)=>{
    res.render("./doctor/details");
}

exports.doctorRequestChat = (req,res)=>{
    res.render("./doctor/doctorRequestChat");
}

exports.doctorViewUser = (req,res)=>{
    res.render("./doctor/viewUser");
}