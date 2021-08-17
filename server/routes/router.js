const express = require("express");
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')
route.get('/',services.homeRoutes)
    
route.get('/addcustomer',services.add_customer)
    
route.get('/updatecustomer',services.update_customer)



//API

route.post('/api/customers',controller.create)
route.get('/api/customers',controller.find)
route.put('/api/customers/:id',controller.update)
route.delete('/api/customers/:id',controller.delete)
module.exports = route;