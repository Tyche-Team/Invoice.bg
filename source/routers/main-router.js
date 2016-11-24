/* globals module require */

const express = require("express");

module.exports = function(app, data) {
    let controller = require("../controllers/main-controller")(data);

    let router = new express.Router();

    router.get("/", controller.getMain);

    app.use("/home", router);
};