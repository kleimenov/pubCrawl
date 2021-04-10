const { Router } = require("express");
const Bars = require("../models/Bars");
const handlers = require("../handlers/functions.handlers");
const router = Router();

//get data from search engine, and post it on server and get result (specific query)
router.post("/", async (req, res) => {
  //get data from client side
  const data = req.body;
  
  //apply validation function, transform data to lowercase, currently I won't use this function,
  //anyway I will store it here just in case.
  const validatedData = handlers.queryValidator(data);

  try {
    //const bars = await Bars.find({ address: { $regex: "M6" } }); //reg expression just in case
    //const bars = await Bars.find({$or: [{"barName":data.barName}, {"type":data.type}, {"district":data.district}]});
    const bars = await Bars.find({$or: [{barName:validatedData.barName}, {type:validatedData.type}, {district:validatedData.district}]});
    res.json(bars);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
