const { Router } = require("express");
const Bars = require("../models/Bars");
const router = Router();

//get data from search engine, and post it on server and get result (specific query)
router.post("/", async (req, res) => {
  console.log("Xyi xyi");
  const {} = req.body;

  try {
    res.json("Xyi");
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

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
