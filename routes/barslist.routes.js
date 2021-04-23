const { Router } = require("express");
const User = require("../models/User");
const Bars = require("../models/Bars");
const router = Router();

/*
all bars list logic will be here
*/

router.post("/userbars", async (req, res) => {
  const data = { _id: req.body.userId };
  const userBarsData = []; 
  try {
    const userBars = await User.find(data);
    //console.log(userBars[0])
    for (let item of userBars[0].barsList) {
      //console.log(item.id)
      const barId = { _id: item.id };
      const bar = await Bars.find(barId);
      userBarsData.push(bar[0]);
    }
    //console.log(userBarsData)
    res.json(userBarsData);
    // for (let item of userBars[0].barsList) {
    //   const barId = { _id: item };
    //   const bar = await Bars.find(barId);
    //   userBarsData.push(bar[0]);
    //   //userBarsData = [...userBarsData, bar]
    // }
    // res.json(userBarsData);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
