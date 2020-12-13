const Users = require("express").Router();
const User = require("../controllers/controller.user");

//C
Users.post("/new", User.create);
//R
// Users.get("/all", User.getAll);
// Users.get("/:id", User.getOne);
// //U
// Users.patch("/:User_id/add_order/:order_id", User.addOrder);
// Users.patch("/:User_id/remove_order/:order_id", User.removeOrder);
// //D
// Users.delete("/:User_id/delete", User.deleteOne);

module.exports = Users;
