const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://lokhi:Carlos41!@cluster0.m0yui9o.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connectée"))
  .catch(() => console.log("Erreur connexion MongoDB"));

app.use("/api/auth", userRoutes);

module.exports = app;
