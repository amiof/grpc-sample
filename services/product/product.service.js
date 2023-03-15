require("./config/db.connection.js");
const grpc = require("@grpc/grpc-js");
const portoLoader = require("@grpc/proto-loader");
const path = require("path");
const protoPath = path.join(__dirname, "..", "..", "proto", "product.proto");
const productProto = portoLoader.loadSync(protoPath);
const { productPackege } = grpc.loadPackageDefinition(productProto);
const serverurl = "localhost:4001";
const server = new grpc.Server();
const {
  listProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("./fucntions/product.grpc.js");
server.addService(productPackege.productService.service, {
  listProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
});
server.bindAsync(serverurl, grpc.ServerCredentials.createInsecure(), (error, port) => {
  if (error) return console.log(error.message);
  server.start();
  return console.log("grpc product service is running over port ", port);
});
