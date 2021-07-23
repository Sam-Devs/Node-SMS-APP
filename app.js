const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const smsRouter = require("./index");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening to localhost: ${PORT}`));

app.use("/", smsRouter);

