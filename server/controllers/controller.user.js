const { User } = require("../models/models");

module.exports = {
    // C
    create: (req, res) => {
        console.log("Creating new user");
        User.create(req.body)
            .then((resp) => {
                console.log(resp);
                if (resp === null || resp === undefined || resp === {}) {
                    res.json({
                        data: "error creating user",
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
                    msg: "Could not create user",
                });
            });
    },
    // R
    // U
    // D
};
