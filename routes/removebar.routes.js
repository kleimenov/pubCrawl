const { Router } = require("express");
const User = require("../models/User");
const router = Router();

/*
all bars list logic will be here
*/

router.post("/remove", async (req, res) => {
  
  const filter = {_id: req.body.userId};
  const deleteId = {barsList: req.body.removeId};
  
  try {
    const testTest = await User.updateOne({_id: req.body.userId}, { $pull: {barsList: { id: req.body.removeId }}  })
    console.log(testTest)
    res.json("love you");
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
