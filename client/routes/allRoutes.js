const { indexRoutes } = require("./indexRoutes");
const router = require("express").Router();

router.use("/product", indexRoutes);
module.exports = { allRoutes: router };
