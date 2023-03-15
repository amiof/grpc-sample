const { default: mongoose } = require("mongoose");

const product = new mongoose.Schema({
  id: { type: Number },
  price: { type: String },
  title: { type: String },
});

module.exports = {
  productModel: mongoose.model("prodcut", product),
};
