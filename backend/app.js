const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user");
const postsRoutes = require("./routes/posts");

mongoose
  .connect(
    "mongodb+srv://lokhi:Carlos41!@cluster0.m0yui9o.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connectée"))
  .catch(() => console.log("Erreur connexion MongoDB"));

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/auth", userRoutes);
app.use("/api/posts", postsRoutes);
// app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
