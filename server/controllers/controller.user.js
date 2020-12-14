const { User } = require("../models/models");
const bcrypt = require("bcrypt");

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
    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email });

        if (user === null) {
            res.status(500).send({
                msg: "cannot find user",
            });
        }

        try {
            if (await bcrypt.compare(req.body.password, user.password)) {
                res.status(200).send({
                    msg: "password match",
                    data: {
                        _id: user._id,
                    },
                });
            }
        } catch {
            res.status(500).send({
                msg: "invalid password",
            });
        }
        res.json({
            data: user,
        });
    },
    // U
    // D
    deleteOne: (req, res) => {
        User.deleteOne({ _id: req.params.user_id })
            .then((resp) => {
                console.log(resp);
                res.status(200).send({
                    msg: "delete successful",
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).send({
                    msg: "delete unsuccessful",
                });
            });
    },
};
