let express = require('express')
const {roleAdmin} = require('../controller/role')
let routes = express.Router()

routes.post('/bookapi/api/roles', roleAdmin)
module.exports = {
    RoleRoutes : routes
}
