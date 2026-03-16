const mongoose = require("mongoose");

const LeadSchema = new mongoose.Schema({

name: {
type: String,
required: true
},

email: String,

phone: String,

service: String,

message: String,

status: {
type: String,
default: "NEW"
},

createdAt: {
type: Date,
default: Date.now
}

});

module.exports = mongoose.model("Lead", LeadSchema);