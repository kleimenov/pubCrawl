const { Router } = require("express");
const UserBarsList = require("../models/UserBarsList");
const router = Router();

/*
all bars list logic will be here
*/
router.post("/barslist", async (req, res) => {
  try {
    const userBars = await Bars.find({});
    res.json(userBars);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
