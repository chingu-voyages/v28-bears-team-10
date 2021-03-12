import connectDB from "../../../middleware/db";

import Dev from "../../../models/dev";

const devs = async (req, res) => {
  // @route     GET api/dev
  // @desc      Get all devs
  // @access    Public
  if (req.method === "GET") {
    try {
      // Get all devs in database
      const devs = await Dev.find();

      res.status(200).json(devs);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }

    // @route     POST api/dev
    // @desc      Add new dev
    // @access    Public
  } else if (req.method === "POST") {
    // @todo add form data validation
    // Destructure data coming from form
    const {
      username,
      first_name,
      last_name,
      email,
      gender,
      location,
      skills,
      description,
      avatar,
      website,
      twitter,
      linkedin,
      github,
    } = req.body;

    try {
      // Create new dev object with fields coming from db
      const newDev = new Dev({
        username,
        first_name,
        last_name,
        email,
        gender,
        location,
        skills,
        description,
        avatar,
        website,
        twitter,
        linkedin,
        github,
      });

      // Save dev to db
      const dev = await newDev.save();

      // Return new dev
      res.status(200).json(dev);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
};

export default connectDB(devs);
