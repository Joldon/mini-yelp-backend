const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: {
        type: String,
        required: [true, "Please add a name"],
    },
});

module.exports = mongoose.model("City", CitySchema);
