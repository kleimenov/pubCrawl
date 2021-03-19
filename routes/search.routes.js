const { Router } = require("express");
const Bars = require("../models/Bars");
const router = Router();

//get all data from Bars colllection. GET Route is:  /api/search/
router.get("/", async (req, res) => {
  try {
    const bars = await Bars.find({});
    res.json(bars);
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
