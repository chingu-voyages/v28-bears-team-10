import mongoose from "mongoose";
var Schema = mongoose.Schema;

var charity = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  skills: {
    type: Array,
  },
  description: {
    type: String,
  },
  avatar: {
    type: String,
  },
  job_listings: {
    type: Array,
  },
  website: {
    type: String,
  },
  twitter: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  github: {
    type: String,
  },
});

mongoose.models = {};

var Charity = mongoose.model("Charity", charity);

export default Charity;
