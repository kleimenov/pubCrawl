const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

const PORT = config.get("PORT") || 3001;

const start = async () => {

    try {} catch (e) {
        console.log("Server Error", e.message)
        process.exit(1)
    }
}

start()

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.....`);
});
