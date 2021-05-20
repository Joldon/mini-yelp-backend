const Restaurant = require("../models/Restaurant");
const City = require("../models/City");
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const getCities = async (req, res, next) => {
    try {
        const cities = await City.find();
        res.json({
            success: true,
            msg: "show all cities",
            data: cities,
        });
    } catch (err) {
        next(err);
    }
};

const getCity = async (req, res, next) => {
    try {
        const { id } = req.params;
        const city = await City.findById(id);
        res.json({
            success: true,
            msg: "show selected cities",
            data: city,
        });
    } catch (err) {
        next(err);
    }
};

const createCity = async (req, res, next) => {
    try {
        // insert restaurant
        const { name } = req.body;
        const city = await City.create({ name });

        res.json({
            success: true,
            msg: `city with name ${name} created`,
            data: city,
        });
    } catch (err) {
        next(err);
    }
};

const updateCity = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const restaurant = await Restaurant.findByIdAndUpdate(
            id,
            { name },
            { new: true }
        );
        res.json({
            success: true,
            msg: `city with id ${id} updated`,
            data: city,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getCities,
    getCity,
    createCity,
    updateCity,
};
