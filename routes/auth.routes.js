const { Roruter, Router } = require("express");
const User = require("../models/User");
const router = Router();

// /api/auth (all next routs will be concatinate with this path)

//console.log(User.schema.obj)

//first auth route is:  /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, telephone_number } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      return res.status(400).json({ message: "Current euser already exist" });
    }
  } catch (e) {}
});

//second auth route is:  /api/auth/login
router.post("/login", async (req, res) => {});

module.exports = router;
