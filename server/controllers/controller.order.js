const { Order } = require("../models/models");

module.exports = {
    // C
    create: (req, res) => {
        Order.create(req.body)
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
    // D
};
