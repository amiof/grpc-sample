const { default: mongoose } = require("mongoose");

module.exports = mongoose
  .connect("mongodb://localhost:27017/grpc-proj")
  .then(() => console.log("connect to database"))
  .catch((error) => {
    console.log(error);
  });
