const express = require("express");
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    notes: "This is Sumit Notes",
    no: 25,
    user: { name: "sumit", age: 25 },
  });
});

module.exports = router;
