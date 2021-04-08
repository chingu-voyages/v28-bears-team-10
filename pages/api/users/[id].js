import connectDB from "../../../middleware/db";

import User from "../../../models/User";

const user = async (req, res) => {
  // @route     GET api/user/:id
  // @desc      Get user profile
  // @access    Public
  if (req.method === "GET") {
    try {
      //   Search user in db (using id coming from query)
      const user = await User.findById(req.query.id);

      // Search for user in db (using email)
      //   const user = await User.find({ email: req.query.id });

      // Return user
      res.status(200).json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
  // @route     PUT api/users/:id
  // @desc      Edit user profile
  // @access    Private
  if (req.method === "PUT") {
    // Destructure data coming from form
    const {
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

    // Build dev object with new fields
    const userFields = {};
    if (username) userFields.username = username;
    if (email) userFields.email = email;
    if (userType) userFields.userType = userType;
    if (avatar) userFields.avatar = avatar;
    if (profileUpdated) userFields.profileUpdated = profileUpdated;
    if (location) userFields.location = location;
    if (description) userFields.description = description;
    if (job_listings) userFields.job_listings = job_listings;
    if (skills) userFields.skills = skills;
    if (website) userFields.website = website;
    if (twitter) userFields.twitter = twitter;
    if (linkedin) userFields.linkedin = linkedin;
    if (github) userFields.github = github;

    try {
      // Search for user (in db) that matches the id (from query)
      let user = await User.findById(req.query.id);
      if (!user) return res.status(404).json("Not found");

      // @todo check if user owns the profile

      // Update user profile in db
      user = await User.findByIdAndUpdate(
        req.query.id,
        { $set: userFields },
        { new: true }
      );

      // Return updated profile
      res.status(200).json(user);
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
      let user = await User.findById(req.query.id);
      if (!user) return res.status(404).json("Not found");

      // @todo check if user owns the profile

      //  Find user with id (coming from query) and remove from db
      await User.findByIdAndRemove(req.query.id);
      return res.status(200).json("Removed");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
};

export default connectDB(user);
