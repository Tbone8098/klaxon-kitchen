const { Order, Kitchen } = require("../models/models");

module.exports = {
    // C
    create: async (req, res) => {
        const newOrder = await Order.create(req.body);

        // if newOrder comes back as an undefined
        if (newOrder === undefined) {
            res.json({
                data: "error creating order",
                status: 500,
            });
        }

        console.log(`new order: ${newOrder}`);

        // add to kitchen
        const addToKitchen = await Kitchen.findOneAndUpdate(
            { _id: req.body.kitchenId },
            {
                $addToSet: { kitchenOrders: newOrder._id },
            },
            {
                new: true,
                useFindAndModify: false,
                runValidators: true,
            }
        ).populate("kitchenOrders");

        console.log(`add to kitchen: ${addToKitchen}`);

        // if addToKitchen fails to obtain a kitchen obj
        if (addToKitchen === undefined) {
            res.json({
                data: "error adding order to kitchen",
                status: 500,
            });
        }

        await res.json({
            data: addToKitchen,
            status: 200,
        });
    },
    // R
    // U
    updateOne: async (req, res) => {
        const orderToUpdate = await Order.findOneAndUpdate(
            { _id: req.params.order_id },
            req.body,
            {
                new: true,
                useFindAndModify: false,
                runValidators: true,
            }
        );

        if (orderToUpdate === undefined) {
            res.json({
                data: "error updating order",
                status: 500,
            });
        }

        res.json({
            data: orderToUpdate,
            status: 200,
        });
    },
    // D
    deleteOne: async (req, res) => {
        const kitchenId = req.body.kitchenId;
        const orderId = req.params.order_id;

        const toDelete = await Order.deleteOne({ _id: req.params.order_id });

        if (toDelete === undefined) {
            res.json({
                data: "error deleting order",
                status: 500,
            });
        }

        // remove from kitchen
        const removeOrderFromKitchen = await Kitchen.findOneAndUpdate(
            { _id: kitchenId },
            { $pull: { kitchenOrders: orderId } },
            {
                new: true,
                useFindAndModify: false,
                runValidators: true,
            }
        );

        if (removeOrderFromKitchen === undefined) {
            res.json({
                data: "error removing from kitchen",
                status: 500,
            });
        }

        res.json({
            data: {
                order: toDelete,
                kitchen: removeOrderFromKitchen,
            },
            status: 200,
            msg: "order was successfully deleted and removed from kitchen",
        });
    },
};
