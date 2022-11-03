const {Role} = require('../models')
async function roleAdmin(req,res){
    const name = req.body.name
    try{
        const result = await Role.create({name})
        res.send({msg:"create sucess",result})

    }catch(err){
        res.status(500).send({msg:"internal error"})
        console.log(err)
    }

}
module.exports = {
    roleAdmin
}