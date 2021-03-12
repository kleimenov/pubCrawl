const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

const PORT = config.get("PORT") || 3001;

const start = async () => {
    try {
      await mongoose.connect(config.get("mongoUri"), {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      });
      app.listen(PORT, () =>
        console.log(`Server is listening PORT ${PORT}.......`)
      );
    } catch (e) {
      console.log("Server Error", e.message);
      process.exit(1);
    }
  };
  
  start();
