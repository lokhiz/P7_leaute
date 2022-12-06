const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");


const userRoutes = require("./routes/user");
// const postsRoutes = require("./routes/posts");

mongoose
  .connect(
    "mongodb+srv://lokhi:Carlos41!@cluster0.m0yui9o.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB connectée"))
  .catch(() => console.log("Erreur connexion MongoDB"));

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/auth", userRoutes);
// app.use("/api/posts", postsRoutes);
// app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
