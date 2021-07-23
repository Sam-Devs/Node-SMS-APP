const express = require("express");
const dotenv = require("dotenv").config();
const smsRoute = require("./index");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", smsRoute);

app.listen(PORT, () => console.log(`running on localhost:${PORT}`));
