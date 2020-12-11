const Kitchens = require("express").Router();
const Kitchen = require("../controllers/controller.kitchen");

//C
Kitchens.post("/new", Kitchen.create);
//R
// Kitchens.get("/order/", Kitchen.getAll);
// Kitchens.get("/order/:id", Kitchen.getOne);
// //U
Kitchens.patch("/update/:id", Kitchen.updateOne);
// //D
// Kitchens.delete("/order/delete/:id", Kitchen.deleteOne);

module.exports = Kitchens;
