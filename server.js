require("dotenv").config();
require("colors");
const express = require("express");
const cors = require("cors");

const connectDB = require("./dbinit");
const restaurants = require("./api/restaurants");
const cities = require("./api/cities");
const errorHandler = require("./middleware/error");

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/", (req, res) => res.send("Nothing to find here"));
app.use("/restaurants", restaurants);
app.use("/cities", cities);
app.use(errorHandler);

app.listen(port, () =>
    console.log(`Started server on port ${port}`.rainbow.bold.inverse)
);
