const { productModel } = require("../models/productModle");

async function listProduct(call, callback) {
  const product = await productModel.find({});
  console.log(product);
  callback(null, { products: product });
}
async function getProduct(call, callback) {
  try {
    const { id } = call.request;
    console.log(id);
    const product = await productModel.find({ id });
    console.log(product);
    callback(null, product[0]);
  } catch (error) {
    callback(error);
  }
}
async function createProduct(call, callback) {
  const { price, title, id } = call.request;
  console.log(price, title, id);
  const product = await productModel.create({ price, title, id });

  console.log(product);
  callback(null, { status: "product is created" });
}
async function updateProduct(call, callback) {}
async function deleteProduct(call, callback) {}

module.exports = {
  listProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
