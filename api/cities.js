const express = require("express");
const {
    getCities,
    getCity,
    createCity,
    updateCity,
} = require("../controllers/cities");

const api = express.Router();

api.route("/").get(getCities).post(createCity);

api.route("/:id").get(getCity).put(updateCity);

module.exports = api;
