const controller = require("../controllers/controller.order");

module.exports = (app) => {
    //C
    app.post("/api/new", controller.create);
    //R
    app.get("/api/", controller.getAll);
    app.get("/api/:id", controller.getOne);
    //U
    app.patch("/api/update/:id", controller.updateOne);
    //D
    app.delete("/api/delete/:id", controller.deleteOne);
};
