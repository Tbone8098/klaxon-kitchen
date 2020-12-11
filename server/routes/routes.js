module.exports = (app) => {
    app.use("/order", require("./route.order"));
    app.use("/kitchen", require("./route.kitchen"));
};
