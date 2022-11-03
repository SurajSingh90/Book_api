let express = require('express');
// const {} = require('../controller');
const { updateBooks,getAllBook ,Upbook,Deletbook,searchBook} = require('../controller/bookupdate');
let routes = express.Router()
routes.post('/book/home/',updateBooks)
routes.get('/book/all/:id',getAllBook)
routes.put('/book/all/:id',Upbook)
routes.delete('/book/all/:id',Deletbook)
routes.get('/book/all/title/:title',searchBook)
module.exports = {
    bookRoutes:routes
}

