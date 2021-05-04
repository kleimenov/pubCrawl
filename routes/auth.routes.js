const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = Router();

// /api/auth (all next routs will be concatinate with this path)

//first auth route is: /api/auth/register
router.post(
  "/register",
  [
    check("email", "Incorrect email").isEmail(),
    check("password", "Password min length should be 6 symbols").isLength({
      min: 6,
    }), 
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "incorrect data, problem with password or email",
        });
      }

      const { name, email, password, phone_number } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "Current euser already exist" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        name,
        email,
        password: hashedPassword,
        phone_number,
      });
      await user.save();

      const token = jwt.sign({ userid: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });
 
      res
        .status(201)
        .json({ message: "New user was created", token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Something goes wrong!" });
    }
  }
);

//second auth route is:  /api/auth/login 
router.post(
  "/login", 
  [
    /*check("email", "Input correct email").normalizeEmail().isEmail(),*/
    check("email", "Input correct email").isEmail(),
    check("password", "Input correct password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "incorrect data, problem with password or email",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });
      //console.log(user) //get user data OK

      if (!user) {
        return res.status(400).json({ message: "User didn't found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(500).json({ message: "Incorrect password" });
      }

      const token = jwt.sign({ userid: user.id }, config.get("jwtSecret"), {
        expiresIn: "1h",
      });

      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Something goes wrong!" });
    }
  }
);

module.exports = router;
