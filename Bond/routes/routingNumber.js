const express = require("express");
const router = express.Router();
const Secret = require("../models/letItBe");
const Vault = require("../models/Vault");

/* GET home page. */
router.get("/decoder", (req, res, next) => {
  console.log("HELLLOOO FROM THE BACK END");

  Vault.find({}, (err, secrets) => {
    if (secrets == null) {
      return res.json({ message: "No secrets Up in Here" });
    }
    return res.status(200).json({ secrets });
  });
});

module.exports = router;
