import connectDB from "../../../middleware/db";

import User from "../../../models/User";

const users = async (req, res) => {
  // @route     GET api/users
  // @desc      Get all users
  // @access    Public
  if (req.method === "GET") {
    try {
      // Get all users in database
      const users = await User.find();

      res.status(200).json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }

    // @route     POST api/users
    // @desc      Add new user
    // @access    Public
  } else if (req.method === "POST") {
    // @todo add form data validation
    // Destructure data coming from form
    const {
      sub,
      username,
      userType,
      email,
      avatar,
      profileUpdated,
      location,
      description,
      job_listings,
      skills,
      website,
      twitter,
      linkedin,
      github,
    } = req.body;

    try {
      // Create new user object with fields coming from form
      const newUser = new User({
        sub,
        username,
        userType,
        email,
        avatar,
        profileUpdated,
        location,
        description,
        job_listings,
        skills,
        website,
        twitter,
        linkedin,
        github,
      });

      // Save dev to db
      const user = await newUser.save();

      // Return new user
      res.status(200).json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
};

export default connectDB(users);
