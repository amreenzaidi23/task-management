var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let Document = new Schema({
  document_title: {
    type: String,
    trim: true,
    default: ""
  },
  desc: {
    type: String,
    trim: true,
    default: ""
  },
  due_date: {
    type: Date,
    default: ""
  }
});

module.exports = mongoose.model("Document", Document);
