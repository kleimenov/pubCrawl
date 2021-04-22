const { Router } = require("express");
const User = require("../models/User");
const Bars = require("../models/Bars");
const router = Router();

/*
all bars list logic will be here
*/

router.post("/remove", async (req, res) => {
  console.log(req.body.removeId)
  console.log(req.body)
  
  //User.update({_id: user._id}, {$unset: {field: 1 }}, callback);
  try {
    res.json("love you");
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
