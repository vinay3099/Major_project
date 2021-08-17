const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/customers
    axios.get('http://localhost:3000/api/customers')
        .then(function(response){
            res.render('index', { customers : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_customer = (req, res) =>{
    res.render('add_customer');
}

exports.update_customer = (req, res) =>{
    axios.get('http://localhost:3000/api/customers', { params : { id : req.query.id }})
        .then(function(customerdata){
            res.render("update_customer", { customer : customerdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}