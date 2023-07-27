const mongoose = require("mongoose");

const JefesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
})

const Jefes = mongoose.model("jefes", JefesSchema);

module.exports = Jefes;