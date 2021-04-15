const { Router } = require("express");
const User = require("../models/User");
const router = Router();

/*
all bars list logic will be here
*/ 

router.post("/userbars", async (req, res) => {
    const data = {_id: req.body.userId}
    console.log(data)
    try {
      const allBars = await User.find({_id: '6050cd4f4790ac71d8f3e818'});
      console.log(allBars[0].barsList)
      res.json(allBars);
    } catch (e) {
      res.status(500).json({ message: "Something goes wrong!" });
    }
  });

module.exports = router;
