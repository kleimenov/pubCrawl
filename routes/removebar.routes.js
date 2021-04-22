const { Router } = require("express");
const User = require("../models/User");
const router = Router();

router.post("/removebar", async (req, res) => {
  console.log(req.body);
  // try {

  //   } catch (e) {
  //     res.status(500).json({ message: "Something goes wrong!" });
  //   }
});
