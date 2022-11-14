const express = require("express");
const app = require("./app");
const port = 5000;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});
