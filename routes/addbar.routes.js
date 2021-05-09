const { Router } = require("express");
const UserBarList = require("../models/UserBarsList");
const route = Router();

route.post("/add", async (req, res) => {
  const data;
  try {
    const barList = new UserBarList({
      /*
      here I will add bar's data that I want to add in DB
      collection UserBarsList
      */
    });
    await barList.save();
    res
      .status(201)
      .json({ message: "New was added", userId: user.id, barId: bar.id });
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});
