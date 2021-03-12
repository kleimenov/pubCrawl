const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, require: true },
  email: {type: String, require: true, unique: true},
  password: {type: String, require: true},
  telephone_number: {type: String},
  barsList: [ {type: Types.ObjectId, ref: 'Bars'}],
  date: {type: Date, default: Date.now}

});

module.exports = model("User", schema);
