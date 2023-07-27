const mongoose = require("mongoose");

const DepartamentosSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
})

const Departamentos = mongoose.model("departamentos", DepartamentosSchema);

module.exports = Departamentos;