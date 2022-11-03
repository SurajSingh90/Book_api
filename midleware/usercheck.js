const { User, Role } = require("../models");
async function checkDublicateUser(req, res, next) {
  try {
    if (req.body.username) {
      const user = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
      if (user) {
        res.status(400).send({ msg: "user already exist" });
        return;
      }
    }
  } catch (err) {
    console.log("err", err);
    res.status(400).send({ msg: "internal error" });
  }
  try {
    if (req.body.email) {
      const gmail = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (gmail) {
        res.status(400).send({ msg: "email already exists" });
        return;
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ msg: "internval errr" });
  }

  next();
}

async function checkROle(req, res, next) {
  if (req.body.role) {
    let role = req.body.role;
    let flag = true;
    const resultFromDb = await Role.findAll({
      attributes: ["id"]
    });
    if (resultFromDb.length > 0) { 
      const storeRoles = [];
      for (let i = 0; i < resultFromDb.length; i++) {
        storeRoles.push(resultFromDb[i].dataValues.id);
      }
      for (let i = 0; i < role.length; i++) {
        const result = storeRoles.includes(role[i]);
        if (!result) {
          flag = false;
          break;
        }
      }
      if (flag) {
        next();
      } else {
        res.status(400).send({ msg: "Role id does not exist" });
        return;
      }
    } else {
      res
        .status(500)
        .send({ msg: "Internal server error, Role does not found" });
      return;
    }
  } else {
    next();
  }
}

module.exports = {
  checkDublicateUser,
  checkROle,
};
