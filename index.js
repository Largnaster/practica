import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import express from "express";

const app = express();

// Conexion a base de datos con mongoose
const uri = process.env.MONGO_URL || "mongodb://localhost:27017/test";
// const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(uri, options).then(
  () => {
    console.log("Conectado a base de datos " + uri);
  },
  (err) => {
    err;
  }
);

app.use(morgan("common"));
app.use(cors());
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/router"));

// Puede que sean lineas prescindibles
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

// Configurar el puerto de escucha
app.set("puerto", process.env.PORT || 3000);
app.listen(app.get("puerto"), () => {
  console.log("Aplicacion escuchando por el puerto " + app.get("puerto"));
});
