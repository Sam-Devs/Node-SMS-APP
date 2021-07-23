const express = require("express");
const router = express.Router();

// Get authentication
const credentials = {
  apiKey: process.env.APIKEY, // use your sandbox app API key for development in the test environment
  username: process.env.USERNAME // use 'sandbox' for development in the test environment
};

const AfricasTalking = require("africastalking")(credentials);

const sms = AfricasTalking.SMS;
// Send SMS route
router.post("/", (req, res) => {
  const { to, message } = req.body 
  
  if(!to || !message) res.status(400).json({error: "Both 'to' and 'message' are required"});
  
  sms
    .send({ to, message, enque: true })
    .then(response => {
      console.log(response);
      res.json(response);
    })
    .catch(error => {
      console.log(error);
      res.statue(400).json(error.toString());
    });
});

module.exports = router;