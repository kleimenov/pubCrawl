const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

const PORT = config.get("PORT") || 3001;

const start = async () => {

}

start()

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.....`);
});
