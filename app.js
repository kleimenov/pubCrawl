const express = require("express");
const config = require("config");

const app = express();

const PORT = config.get("PORT") || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}.....`);
});
