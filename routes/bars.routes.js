const {Router} = require('express');
const Bars = require('../models/Bars');
const router = Router();

router.get("/", async (req, res) => {
    console.log("Xyi from server")
    try {
        const bars = await Bars.find({})
        console.log(bars)
        res.json(bars);
    } catch (e) {
        res.status(500).json({ message: "Something goes wrong!" });
    }
})


module.exports = router