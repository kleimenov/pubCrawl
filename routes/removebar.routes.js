const { Router } = require("express");
const User = require("../models/User");
const router = Router();


router.post("/remove", async (req, res) => {
  
  try {
    const removeBar = await User.updateOne({_id: req.body.userId}, { $pull: {barsList: { id: req.body.removeId }}  })
    //console.log(removeBar)
    res.json("love you");
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
