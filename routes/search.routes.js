const { Router } = require("express");
const Bars = require("../models/Bars");
const handlers = require("../handlers/functions.handlers");
const router = Router();

//get data from search engine, and post it on server and get result (specific query)
router.post("/", async (req, res) => {
  //check data that came from client side
  const data = req.body;

  //apply validation function, transform data to lowercase, currently I won't use this function,
  //anyway I will store it here just in case.
  const validatedData = handlers.queryValidator(data);

  //execute ReqExp inbox function, to create regular expression, it helps check is there some parts or whole word of bars name in query
  let regex = new RegExp(validatedData.barName, "i");
  console.log(regex);
  console.log(validatedData.barName);

  if (validatedData.barName) {
    try {
      //const bars = await Bars.find({ address: { $regex: "M6" } }); //reg expression just in case
      //const bars = await Bars.find({$or: [{"barName":data.barName}, {"type":data.type}, {"district":data.district}]});
      const bars = await Bars.find({
        $or: [
          //{ barName: `/^${validatedData.type}$/i`},

          //{ barName: validatedData.barName },
          { barName: regex },
          { type: validatedData.type },
          { district: validatedData.district },
        ],
      });
      //console.log('data come from server', bars)
      res.json(bars);
    } catch (e) {
      res.status(500).json({ message: "Something goes wrong!" });
    }
  }
  try {
    const bars = await Bars.find({
      $or: [{ type: validatedData.type }, { district: validatedData.district }],
    });
    res.json(bars);
  } catch (e) {}
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
