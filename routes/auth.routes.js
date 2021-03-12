const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = Router();

// /api/auth (all next routs will be concatinate with this path)

//first auth route is:  /api/auth/register
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

      const { name, email, password, telephone_number } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: "Current euser already exist" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        name,
        email,
        password: hashedPassword,
        telephone_number,
      });
      await user.save();
      res.status(201).json({ message: "New user was created" });
    } catch (e) {}
  }
);

//second auth route is:  /api/auth/login
router.post("/login", async (req, res) => {});

module.exports = router;
