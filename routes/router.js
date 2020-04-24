import express from "express";
const router = express.Router();

// Se necesita importar el modelo de la base de datos
import Alumno from "../models/alumnos";

// Ruta para agregar un nuevo alumno
router.post("/nuevo-alumno", async (req, res) => {
  // Solicitar la informacion
  const body = req.body;
  try {
    // Almacenar la informacion del body
    const alumnoDB = await Alumno.create(body);
    // Generar un json con la informacion para enviar
    res.status(200).json(alumnoDB);
  } catch (error) {
    // Enviar mensaje de error
    return res.status(500).json({
      mensaje: "Ocurrio un error al adicionar",
      error,
    });
  }
});

// Ruta GET para obtener la informacion de la base de datos
router.get("/alumno", async (req, res) => {
  // Obtener la informacion en la base de datos
  try {
    const alumnoDB = await Alumno.find();
    res.json(alumnoDB);
  } catch (error) {
    // Enviar mensaje de error
    return res.status(400).json({
      mensaje: "Ocurrio un error al obtener",
      error,
    });
  }
});

// Obtener una sola coleccion de alumno
router.get("/alumno/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    // Obtener un alumno por el id de mongo
    const alumnoDB = await Alumno.findOne({ _id });
    res.json(alumnoDB);
  } catch (error) {
    // enviar mensaje de error
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Ruta para eliminar una nota
router.delete("/alumno/:id", async (req, res) => {
  // Obtener los parametros del id
  const _id = req.params.id;
  try {
    const alumnoDB = await Alumno.findByIdAndDelete({ _id });
    if (!alumnoDB) {
      // Enviar mensaje de error si no existe la coleccion
      return res.status(400).json({
        mensaje: "Ocurrio un error al obtener",
        error,
      });
    }
    res.json(alumnoDB);
  } catch (error) {
    // Enviar mensaje de error
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Ruta para actualizar un alumno
router.put("/alumno/:id", async (req, res) => {
  // Obtener el id en la ruta
  const _id = req.params.id;
  const body = req.body;
  try {
    const alumnoDB = await Alumno.findByIdAndUpdate(_id, body, { new: true });
    res.json(alumnoDB);
  } catch (error) {
    // Enviar mensaje de error
    return res.status(400).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// Exportar el router
module.exports = router;
