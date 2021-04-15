const { Router } = require("express");
const Bars = require("../models/Bars");
const router = Router();

/*
all bars list logic will be here
*/ 

router.post("/userbars", async (req, res) => {
    const data = {_id: req.body.userId}
    console.log(data)
    try {
      const allBars = await Bars.find({});
      console.log(allBars)
      res.json(allBars);
    } catch (e) {
      res.status(500).json({ message: "Something goes wrong!" });
    }
  });

module.exports = router;
