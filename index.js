const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const { response } = require("express");

dotenv.config();

// Authentication
const credentials = {
    api_key: process.env.APIKEY,
    username: process.env.USERNAME
}

const AfricaTalking = require("africastalking")(credentials);

const sms = AfricaTalking.SMS;
router.post("/", (req, res) => {
    const { to, message} = req.body || res.status(400).json({
        error: "Both 'to' and 'message' are required"
    });
    sms
    .send({to, message, enque: true })
    .then(response => {
        console.log(response);
        res.json(response);
    })
    .catch(error => {
        console.log(error);
        res.json(error.toString());
    })
})
module.exports = router;