const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  phone_number: { type: String },
  //barsList: [{ type: Types.ObjectId, ref: "Bars" }],
  barsList: [
     { id: {type: String }}],
  date: { type: Date, default: Date.now },
});

module.exports = model("User", schema);
