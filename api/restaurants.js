const express = require("express");
const {
    getRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
} = require("../controllers/restaurants");

const api = express.Router();

api.route("/").get(getRestaurants).put(createRestaurant);

api.route("/:id").get(getRestaurant).put(updateRestaurant);

// locahost:5000/users/:id/orders
// api
//   .route('/:id/orders')
//   .get(protect, getUserOrders)

module.exports = api;
