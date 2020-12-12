const mongoose = require("mongoose");
const Order = require("./model.order");

const KitchenSchema = new mongoose.Schema(
    {
        kitchenName: {
            type: String,
            required: true,
        },
        kitchenOrders: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Order,
        },
    },
    { timestamps: true }
);

const Kitchen = mongoose.model("Kitchen", KitchenSchema);
module.exports = Kitchen;
