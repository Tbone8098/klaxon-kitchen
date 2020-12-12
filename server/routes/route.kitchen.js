const Kitchens = require("express").Router();
const Kitchen = require("../controllers/controller.kitchen");

//C
Kitchens.post("/new", Kitchen.create);
//R
// Kitchens.get("/order/", Kitchen.getAll);
// Kitchens.get("/order/:id", Kitchen.getOne);
// //U
Kitchens.patch("/:kitchen_id/add_order/:order_id", Kitchen.addOrder);
Kitchens.patch("/:kitchen_id/remove_order/:order_id", Kitchen.removeOrder);
// //D
Kitchens.delete("/:kitchen_id/delete", Kitchen.deleteOne);

module.exports = Kitchens;
