const { Router } = require("express");
const Bars = require("../models/Bars");
const handlers = require("../handlers/functions.handlers");
const router = Router();

//get data from search engine, and post it on server and get result (specific query)
router.post("/", async (req, res) => {
  //check data that came from client side
  const data = req.body;
  console.log(data);
  //apply validation function, transform data to lowercase, currently I won't use this function,
  //anyway I will store it here just in case.
  const validatedData = handlers.queryValidator(data);
  let regex = new RegExp(validatedData.barName, 'i');
  console.log(regex)
  console.log(validatedData.barName)

  try {
    //const bars = await Bars.find({ address: { $regex: "M6" } }); //reg expression just in case
    //const bars = await Bars.find({$or: [{"barName":data.barName}, {"type":data.type}, {"district":data.district}]});
    const bars = await Bars.find({
      $or: [
          //{ barName: `/^${validatedData.type}$/i`},
          { barName: regex},
        //{ barName: validatedData.barName },

        { type: validatedData.type },
        { district: validatedData.district },
      ],
    });

    //console.log('data come from server', bars)

    res.json(bars);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

//get all data from server (query select all)
router.get("/", async (req, res) => {
  try {
    const allBars = await Bars.find({});
    res.json(allBars);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
