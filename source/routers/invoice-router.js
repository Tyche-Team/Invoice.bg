/* globals module require */
"use strict";

const express = require("express");

module.exports = function(app, data) {
    let controller = require("../controllers/invoice-controller")(data);

    let router = new express.Router();

    router.get("/", controller.getInvoice);

    app.use("/invoice", router);
};