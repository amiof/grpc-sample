const express = require("express");
const { allRoutes } = require("./routes/allRoutes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(allRoutes);
app.listen(4500, () => {
  console.log("server is up in port 4500");
});
