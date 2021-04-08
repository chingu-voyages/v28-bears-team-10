import mongoose from "mongoose";
var Schema = mongoose.Schema;

var JobSchema = new Schema({
  sub: {
    type: String,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  jobRequirements: {
    type: String,
  },
  jobExperienceLevel: {
    type: String,
  },
  jobHoursRequired: {
    type: Number,
  },
  jobTechStack: {
    type: Array,
  },
  postedBy: {
    type: String,
  },
});

mongoose.models = {};

var Job = mongoose.model("job", JobSchema);

export default Job;
