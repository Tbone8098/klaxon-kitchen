module.exports = (app) => {
    app.use("/order", require("./route.order"));
    app.use("/kitchen", require("./route.kitchen"));
    app.use("/user", require("./route.user"));
};
