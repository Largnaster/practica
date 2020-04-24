import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Esquemas para la base de datos
const esqAlumno = new Schema({
  id: { type: String, required: [true, "El Id es requerido"] },
  nombre: {
    type: String,
    required: [true, "El nombre del estudiante es requerido"],
  },
  edad: String,
});

// Convertir el esquema mongoose en un modelo MongoDB
const Alumnos = mongoose.model("Alumnos", esqAlumno);

// Exportar los esquemas
export default Alumnos;
