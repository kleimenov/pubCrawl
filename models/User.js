const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  phone_number: { type: String },
  barsList: [{ type: Types.ObjectId, ref: "Bars" }],
  date: { type: Date, default: Date.now },
});
/*
const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  links: [{type: Types.ObjectId, ref: 'Link'}]
})
*/
module.exports = model("User", schema);
