const { Router } = require("express");
const Bars = require("../models/Bars");
const handlers = require("../handlers/functions.handlers");
const router = Router();

//get data from search engine, and post it on server and get result (specific query)
router.post("/", async (req, res) => {
  //get data from client side
  const data = req.body;
  console.log("raw data before", data);

  //apply validation function, transform data to lowercase
  const validatedData = handlers.queryValidator(data);
  console.log("raw data after", validatedData.type);

  try {
    //const bars = await Bars.find({ address: { $regex: "M6" } }); //reg expression just in case
    const bars = await Bars.find({$or: [validatedData.type, validatedData.district]});
    //console.log(bars);
    res.json(bars);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
