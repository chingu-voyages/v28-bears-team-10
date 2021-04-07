import mongoose from "mongoose";
var Schema = mongoose.Schema;

var job = new Schema({
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
  //   jobCompanyPosting: {
  //     type: { type: mongoose.Schema.Types.ObjectId, ref: "Charity" },
  //     required: true,
  //   },
  //   jobPostingApplicants: {
  //     type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dev" }],
  //   },
});

mongoose.models = {};

var Job = mongoose.model("Job", job);

export default Job;
