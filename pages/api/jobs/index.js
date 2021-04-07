import connectDB from "../../../middleware/db";

import Job from "../../../models/Job";

const jobs = async (req, res) => {
  // @route     GET api/jobs
  // @desc      Get all jobs
  // @access    Public
  if (req.method === "GET") {
    try {
      // Get all jobs in database
      const jobs = await Job.find();

      res.status(200).json(jobs);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }

    // @route     POST api/jobs
    // @desc      Add new job
    // @access    Public
  } else if (req.method === "POST") {
    // @todo add form data validation
    // Destructure data coming from form
    const {
      jobTitle,
      jobDescription,
      jobRequirements,
      jobExperienceLevel,
      jobHoursRequired,
      jobTechStack,
    } = req.body;

    try {
      // Create new user object with fields coming from form
      const newJob = new Job({
        jobTitle,
        jobDescription,
        jobRequirements,
        jobExperienceLevel,
        jobHoursRequired,
        jobTechStack,
      });

      // Save dev to db
      const job = await newJob.save();

      // Return new user
      res.status(200).json(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
};

export default connectDB(jobs);
