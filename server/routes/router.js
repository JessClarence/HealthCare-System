
const express = require('express');
const route = express.Router();


const services = require('../services/render');
const controller = require('../controller/controller');

/*
    @description Root Route
    @method GET /

*/

route.get('/', services.homeRoutes);

/*
    @description for sign In Members
    @method GET /member-signIn

*/

route.get('/member-signIn', services.memberSignIn);


/*
    @description for Admin's UI
    @method GET /dashboard
    @method GET /viewDoctor
    @method GET /addDoctor

*/

route.get('/dashboard', services.adminDashboard);
route.get('/viewDoctor', services.adminViewDoctor);
route.get('/addDoctor', services.adminAddDoctor);


/*
    @description for Update's user form
    @method GET /update-user

*/
route.get('/update-user', services.updateUser);

/*
    @description for Member's UI
    @method GET /member-view-doctor
    @method GET /member-request-chat

*/
route.get('/member-view-doctor', services.memberViewDoctor);
route.get('/member-request-chat', services.memberRequestChat);


/*
    @description for Doctor's UI
    @method GET /doctor-details
    @method GET /doctor-request-chat
    @method GET /doctor-view-user

*/
route.get('/doctor-details', services.doctorDetail);
route.get('/doctor-request-chat', services.doctorRequestChat);
route.get('/doctor-view-user', services.doctorViewUser);


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);



module.exports = route