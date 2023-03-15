const {
  listProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  getProduct,
} = require("../controller/controller-grpc");

const router = require("express").Router();
router.get("/list", listProduct);
router.get("/create", createProduct);
router.get("/delete/:id", deleteProduct);
router.get("/list/:id", getProduct);
router.get("/update", updateProduct);
module.exports = { indexRoutes: router };
