const Orders = require("express").Router();
const Order = require("../controllers/controller.order");

//C
Orders.post("/new", Order.create);
//R
// app.get("/order/", controller.getAll);
// app.get("/order/:id", controller.getOne);
// //U
// app.patch("/order/update/:id", controller.updateOne);
// //D
// app.delete("/order/delete/:id", controller.deleteOne);

module.exports = Orders;
