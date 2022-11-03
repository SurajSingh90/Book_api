const bcrypt = require("bcryptjs");

const {User} = require("../models");
async function singUp(req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, 8);

  try {
    const users = await User.create({ username, email, password });
    if(req.body.role){
      const role = req.body.role;
      const result = await users.setRoles(role)
      console.log('user defined roles', result)
    }else{
      const result = await users.setRoles([157])
      console.log(result)
    }

    res.send({ msg: "User has been created successfully" ,users});
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Internal Server error" });
  }
}
module.exports = {
  singUp,
};
