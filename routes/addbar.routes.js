const { Router } = require("express");
const UserBarList = require("../models/UserBarsList");
const route = Router();

route.post("/add", async (req, res) => {
    const data;
    try {

    } catch (e) {
        res.status(500).json({ message: "Something goes wrong!" });
    }
})