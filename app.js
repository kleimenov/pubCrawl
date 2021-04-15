const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const app = express();
//app.use(cors());

app.use(express.json({ extended: true })); 

//middleware
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/search", require("./routes/search.routes"));
app.use("/api/barslist", require("./routes/barslist.routes")); //added new middleware

//set port settings
const PORT = config.get("PORT") || 3001;

//function start our server and connect us with db
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
