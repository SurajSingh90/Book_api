const express = require('express')
const { serverPort } = require('./config/server')
const {sequelize ,Books,Role} = require('./models')

const {bookRoutes,autheRoutes,RoleRoutes} = require('./routes')
const app = express()
app.use(express.json())
app.use(bookRoutes)
app.use(autheRoutes)
app.use(RoleRoutes)

app.listen(serverPort,async()=>{
    
    // await sequelize.sync({ force: true }); 
    
    console.log("server is running on this port", serverPort); 
    await init();
})

async function init(){
    try{
        await sequelize.authenticate();
        // const defaultBook = [ {
        //     title:"rich dad",
        //     price:500,
        //     author:"suraj0",
        //     pulishedDate:19
        // }]
            let defaultBook = [
                {
                    name :"admine"
                },{
                    name : "User"
                }
                 
                   
            
               
            ]
        // await Books.bulkCreate(defaultBook); 
        // await Prd.bulkCreate(defaultProducts); 
        //  await Role.bulkCreate(defaultBook)

    }catch(err){
        console.log(err)
    }
}