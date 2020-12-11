const mongoose = require("mongoose");
const Order = require("./model.order");

const KitchenSchema = new mongoose.Schema(
    {
        KitchenName: {
            type: String,
            required: true,
        },
        KitchenOrders: {
            type: mongoose.Schema.Types.ObjectId,
            ref: Order,
        },
    },
    { timestamps: true }
);

const Kitchen = mongoose.model("Kitchen", KitchenSchema);
module.exports = Kitchen;
