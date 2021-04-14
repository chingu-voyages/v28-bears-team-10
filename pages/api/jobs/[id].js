import connectDB from "../../../middleware/db";

import Job from "../../../models/Job";

const job = async (req, res) => {
  // @route     GET api/job/:id
  // @desc      Get job profile
  // @access    Public
  if (req.method === "GET") {
    try {
      //   Search job in db (using id coming from query)
      const job = await Job.findById(req.query.id);

      // Return job
      res.status(200).json(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
  // @route     PUT api/jobs/:id
  // @desc      Edit job profile
  // @access    Private
  if (req.method === "PUT") {
    // Destructure data coming from form
    const {
      sub,
      jobTitle,
      jobDescription,
      jobRequirements,
      jobExperienceLevel,
      jobHoursRequired,
      jobTechStack,
      postedBy,
    } = req.body;

    // Build dev object with new fields
    const jobFields = {};
    if (jobTitle) jobFields.jobTitle = jobTitle;
    if (sub) jobFields.sub = sub;
    if (jobDescription) jobFields.jobDescription = jobDescription;
    if (jobRequirements) jobFields.jobRequirements = jobRequirements;
    if (jobExperienceLevel) jobFields.jobExperienceLevel = jobExperienceLevel;
    if (jobHoursRequired) jobFields.jobHoursRequired = jobHoursRequired;
    if (jobTechStack) jobFields.jobTechStack = jobTechStack;
    if (postedBy) jobFields.postedBy = postedBy;

    try {
      // Search for user (in db) that matches the id (from query)
      let job = await Job.findById(req.query.id);
      if (!job) return res.status(404).json("Not found");

      // Update job profile in db
      job = await Job.findByIdAndUpdate(
        req.query.id,
        { $set: jobFields },
        { new: true }
      );

      // Return updated profile
      res.status(200).json(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
    // @route     DELETE api/user/:id
    // @desc      Delete user profile
    // @access    Private
  } else if (req.method === "DELETE") {
    try {
      // Check if user with id (coming from query) exists
      let job = await Job.findById(req.query.id);
      if (!job) return res.status(404).json("Not found");

      //  Find job with id (coming from query) and remove from db
      await Job.findByIdAndRemove(req.query.id);
      return res.status(200).json("Removed");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
};

export default connectDB(job);
