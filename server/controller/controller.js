const Memberdb = require('../model/memberModel');

// create and save new user.
exports.create = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content cannot be empty!"});
    }

    const user = new Memberdb({
        name:req.body.name,
        mobileNo:req.body.mobileNo,
        email:req.body.email
    })

    //save user in the database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/member-view-doctor');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a create operation"
        });
     });
}

// retrieve and return all users / retrieve and return a single user.
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        Memberdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Memberdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}

// update a new identified user by user id
exports.update = (req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty!"})
    }

    const id = req.params.id;
    Memberdb.findByIdAndUpdate(id, req.body,{ useFindAndModify: false })
            .then(data => {
                if(!data){
                    res.status(400).send({ message: `Cannot Update user with ${id}. Maybe user not found!`});
                }else{
                    res.send(data)
                }
            })
            .catch(err=>{
                res.status(500).send({message: "Error Update user information!"});
            })

}

// delete a user with specified user id in the request
exports.delete = (req,res)=>{
    const id = req.params.id;

    Memberdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}
