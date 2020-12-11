const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        Que: {
            type: Number,
            required: true,
        },
        Order: {
            type: String,
            required: true,
        },
        Notes: String,
        Status: {
            type: String,
            required: true,
            default: "In Pro",
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
