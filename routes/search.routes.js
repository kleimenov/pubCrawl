const { Router } = require("express");
const Bars = require("../models/Bars");
const {toCapitalize} = require('../handlers/functions.handlers')
const router = Router();

//get data from search engine, and post it on server and get result (specific query)
router.post("/", async (req, res) => {

  const data = req.body;
  console.log("Xyi xyi", data);

  console.log(toCapitalize(data.item))
  

  try {
    const bars = await Bars.find({ address: { $regex: "M6" } });
    res.json(bars);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
