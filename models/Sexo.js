const mongoose = require("mongoose");

const SexoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
})

const Sexo = mongoose.model("sexos", SexoSchema);

module.exports = Sexo;