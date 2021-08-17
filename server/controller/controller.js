const Customerdb = require('../models/model');

//create and save new customer

exports.create = (req,res)=>{
   //validate request
   if(!req.body){
    res.status(400).send({message:"Content can not be empty"});
    return;
    }

  //new customer
  const customer = new Customerdb({ 
    name:req.body.name,
    vehiclename:req.body.vehiclename,
    vehiclenumber:req.body.vehiclenumber,
    entrydate:req.body.entrydate,
    exitdate:req.body.exitdate
   })

  

  //save customer in database
  customer
    .save(customer)
    .then(data=>{
    res.redirect('/addcustomer')

    })
    .catch(err=>{
    res.status(500).send(err) 
    });
}


//retrieve and return all customers or a single customer

exports.find=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        Customerdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Error retrieving user with id " + id})
            })

    }else{
        Customerdb.find()
            .then(customer => {
                res.send(customer)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}




//Update a new identified customer by customer id

exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    Customerdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}


//Delete a customer with specified user id in the request

exports.delete=(req,res)=>{

    const id = req.params.id;

    Customerdb.findByIdAndDelete(id)
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