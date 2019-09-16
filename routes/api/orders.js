const Order = require('../../db').Order
const route = require('express').Router();

route.get('/', (req, res) => {
    // Get all products
    Order.findAll()
        .then((orders) => {
            res.status(200).send(orders)
        })
        .catch((err) => {
            res.status(500).send({
                error: "Could not retrieve products"
            })
        })
})

route.post('/', (req, res) => {
    // Validate the values
    // Add a new product
    Order.create({
        name: req.body.name,
        lastname: req.body.lastname,
        doorno: req.body.doorno,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode:req.body.zipcode,
        email:req.body.email,
        plan:req.body.plan

    }).then((order) => {
        res.status(201).send(order)
    }).catch((error) => {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

exports = module.exports = route