const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const useRouteCategory= require("./Routes/Category");
const useRouteProduc = require("./Routes/Product")
// settings
const app = express();
 app.use(express.json());
app.get("/", (req, res) => {
    res.send("Welcome to my API");
  });
 app.use("",useRouteCategory);
 app.use("",useRouteProduc);

const port = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));
  app.listen(port, () => console.log("Server listening to", port));