const { Kitchen } = require("../models/models");

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
    updateOne: (req, res) => {
        Kitchen.findOneAndUpdate(
            { _id: req.params.id },
            {
                $addToSet: { KitchenOrders: req.body.KitchenOrder },
            },
            {
                new: true,
                useFindAndModify: false,
                runValidators: true,
            }
        )
            .populate("KitchenOrders")
            .then((resp) => {
                res.json({
                    data: resp,
                    status: 200,
                }).catch((err) => {
                    res.json({
                        data: err,
                        status: 500,
                    });
                });
            });
    },
    // D
};
