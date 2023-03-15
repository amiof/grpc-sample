const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const pathProto = path.join(__dirname, "..", "..", "proto", "product.proto");
const productProto = protoLoader.loadSync(pathProto);
const { productPackege } = grpc.loadPackageDefinition(productProto);
const serverPath = "localhost:4001";
const productClient = new productPackege.productService(
  serverPath,
  grpc.credentials.createInsecure()
);

function listProduct(req, res) {
  productClient.listProduct(null, (error, data) => {
    if (error) return res.json(error);
    res.status(200).json({ satus: 200, data });
  });
}
function getProduct(req, res) {
  const { id } = req.params;
  productClient.getProduct({ id }, (error, data) => {
    if (error) return res.json(error);
    res.status(200).json({ satus: 200, data });
  });
}
function createProduct(req, res) {
  const { title, price, id } = req.query;
  productClient.createProduct({ title, price, id }, (error, data) => {
    if (error) return res.json(error);
    res.status(200).json({ satus: 200, data });
  });
}
function updateProduct(req, res) {}
function deleteProduct(req, res) {}

module.exports = {
  listProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
