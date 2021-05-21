const express = require("express");
const {
    getTags,
    getTag,
    createTag,
    updateTag,
} = require("../controllers/tags");

const api = express.Router();

api.route("/").get(getTags).post(createTag);

api.route("/:id").get(getTag).put(updateTag);

module.exports = api;
