const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(bodyparser.json());

const customerroutes = require("./routes/customer");
const routesroute = require("./routes/route");
const bookingroutes = require("./routes/booking");

app.use(customerroutes);
app.use(routesroute);
app.use(bookingroutes);

const DB_URL =
  "mongodb+srv://admin:test@red-bus-clone.9kjbl.mongodb.net/?retryWrites=true&w=majority&appName=Red-Bus-Clone";

mongoose
  .connect(DB_URL)
  .then(() => console.log("Mongodb Connected"))
  .catch((err) => console.error("Mongodb connection error:", err));

app.get("/", (req, res) => {
  res.send("Hello, Red bus is working");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
