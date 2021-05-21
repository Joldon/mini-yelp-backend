const Restaurant = require("../models/Restaurant");
const City = require("../models/City");
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const getRestaurants = async (req, res, next) => {
    try {
        const restaurants = await Restaurant.find().populate("city");
        res.json({
            success: true,
            msg: "show all restaurants",
            data: restaurants,
        });
    } catch (err) {
        next(err);
    }
};
//https://github.com/Joldon/mini-yelp-backend/commit/86b8afd05b2c0bd8f2bc37384c92c88f4a6f1980
const getRestaurant = async (req, res, next) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id).populate("city");
        res.json({
            success: true,
            msg: "show selected restaurants",
            data: restaurant,
        });
    } catch (err) {
        next(err);
    }
};

const createRestaurant = async (req, res, next) => {
    try {
        const { name, city, image, description, cuisine } = req.body;

        const restaurant = await Restaurant.create({
            name,
            city,
            image,
            description,
            cuisine,
        });

        res.json({
            success: true,
            msg: `restaurant with name ${name} created`,
            data: restaurant,
        });
    } catch (err) {
        next(err);
    }
};

const updateRestaurant = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, cityId, image, description, cuisine } = req.body;

        const restaurant = await Restaurant.findByIdAndUpdate(
            id,
            { name, cityId, image, description, cuisine },
            { new: true }
        );
        res.json({
            success: true,
            msg: `restaurant with id ${id} updated`,
            data: restaurant,
        });
    } catch (err) {
        next(err);
    }
};

// const getUserOrders = async (req, res, next) => {
//     // ?price[lte]=2000
//     try {
//         const { id } = req.params;
//         const queryStr = JSON.stringify(req.query).replace(
//             /\b(gt|gte|lt|lte|in)\b/g,
//             (match) => `$${match}`
//         );

//         const orders = await Order.find({
//             userId: ObjectId(id),
//             ...JSON.parse(queryStr),
//         });
//         res.json({
//             success: true,
//             msg: `orders of user with user id ${id} retrieved`,
//             data: orders,
//         });
//     } catch (err) {
//         next(err);
//     }
// };

module.exports = {
    getRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
};
