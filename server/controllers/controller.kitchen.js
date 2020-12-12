const { Kitchen, Order } = require("../models/models");
const Kitchens = require("../routes/route.kitchen");

module.exports = {
    // C
    create: (req, res) => {
        Kitchen.create(req.body)
            .then((resp) => {
                res.json({
                    data: resp,
                    status: 200,
                });
            })
            .catch((err) => {
                res.json({
                    data: err,
                    status: 500,
                });
            });
    },
    // R
    // U
    addOrder: (req, res) => {
        Kitchen.findOneAndUpdate(
            { _id: req.params.kitchen_id },
            {
                $addToSet: { KitchenOrders: req.params.order_id },
            },
            {
                new: true,
                useFindAndModify: false,
                runValidators: true,
            }
        )
            .populate("KitchenOrders")
            .then((resp) => {
                if (resp === null) {
                    res.json({
                        data: "error with adding order",
                        status: 500,
                    });
                }
                res.json({
                    data: resp,
                    status: 200,
                });
            })
            .catch((err) => {
                res.json({
                    data: err,
                    status: 500,
                });
            });
    },
    removeOrder: (req, res) => {
        Kitchen.findOneAndUpdate(
            { _id: req.params.kitchen_id },
            { $pull: { kitchenOrders: req.params.order_id } },
            {
                new: true,
                useFindAndModify: false,
                runValidators: true,
            }
        ).then((resp) => {
            // Order.deleteOne({ _id: req.body.KitchenOrder });
            console.log("running then function");
            console.log(req.params.order_id);
            res.json({
                data: resp,
                status: 200,
                msg: req.body.kitchenOrder,
            });
        });
        // .catch((err) => {
        //     res.json({
        //         data: err,
        //         status: 500,
        //     });
        // });
    },
    // D
    deleteOne: (req, res) => {
        Kitchen.deleteOne({ _id: req.params.kitchen_id })
            .then((resp) => {
                if (resp === null) {
                    res.json({
                        data: resp,
                        status: 500,
                    });
                }
                res.json({
                    data: resp,
                    status: 200,
                });
            })
            .catch((err) => {
                res.json({
                    data: err,
                    status: 500,
                });
            });
    },
};
