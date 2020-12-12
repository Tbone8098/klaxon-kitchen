const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        que: {
            type: String,
            required: true,
        },
        order: {
            type: String,
            required: true,
        },
        notes: String,
        status: {
            type: String,
            required: true,
            default: "In Pro",
        },
        kitchenId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
