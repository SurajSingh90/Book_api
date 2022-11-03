let express = require('express')
const {singUp} = require('../controller/auth')
const {checkDublicateUser, checkROle} = require('../midleware/usercheck')
let routes = express.Router()

routes.post('/bookapi/api/singup',[checkDublicateUser],[checkROle], singUp)
module.exports = {
    autheRoutes : routes
} 
