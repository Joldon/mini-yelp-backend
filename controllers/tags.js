const Tag = require("../models/Tag");
const mongoose = require("mongoose");

const { ObjectId } = mongoose.Types;

const getTags = async (req, res, next) => {
    try {
        const tags = await Tag.find();
        res.json({
            success: true,
            msg: "show all Tags",
            data: tags,
        });
    } catch (err) {
        next(err);
    }
};

const getTag = async (req, res, next) => {
    try {
        const { id } = req.params;
        const tag = await Tag.findById(id);
        res.json({
            success: true,
            msg: "show selected tag",
            data: tag,
        });
    } catch (err) {
        next(err);
    }
};

const createTag = async (req, res, next) => {
    try {
        // insert restaurant
        const { name } = req.body;
        const tag = await Tag.create({ name });

        res.json({
            success: true,
            msg: `Tag with name ${name} created`,
            data: tag,
        });
    } catch (err) {
        next(err);
    }
};

const updateTag = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const tag = await Tag.findByIdAndUpdate(id, { name }, { new: true });
        res.json({
            success: true,
            msg: `Tag with id ${id} updated`,
            data: tag,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getTags,
    getTag,
    createTag,
    updateTag,
};

// this code is copied from cities because they have the same coding structure (id and name)
