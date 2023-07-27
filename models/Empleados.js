const mongoose = require("mongoose");

const EmpleadosSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  dni: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  sexo: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  departamento: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  jefe: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

const Empleados = mongoose.model("empleados", EmpleadosSchema);

module.exports = Empleados;