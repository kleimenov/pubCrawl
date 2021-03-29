const { Router } = require("express");
const Bars = require("../models/Bars");
const toCapitalize = require("../handlers/functions.handlers");
const router = Router();

//get data from search engine, and post it on server and get result (specific query)
router.post("/", async (req, res) => {
  //get data from client side
  const data = req.body;
  console.log(data);
  //check what data we have


  try {
    //const bars = await Bars.find({ address: { $regex: "M6" } });
    
    const bars = await Bars.find({ });
    res.json(bars);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
