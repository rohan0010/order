const route = require('express').Router()

route.use('/users', require('./users'))
route.use('/products', require('./products'))
route.use('/orders', require('./orders'))

exports = module.exports = {
    route
}