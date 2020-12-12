const Orders = require("express").Router();
const Order = require("../controllers/controller.order");

//C
Orders.post("/new", Order.create);
//R
// Orders.get("/order/", Order.getAll);
// Orders.get("/order/:id", Order.getOne);
// //U
Orders.patch("/:order_id/update", Order.updateOne);
// //D
Orders.delete("/:order_id/delete", Order.deleteOne);

module.exports = Orders;
