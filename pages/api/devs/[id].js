import connectDB from "../../../middleware/db";

import Dev from "../../../models/Dev.js";

const dev = async (req, res) => {
  // @route     GET api/dev/:id
  // @desc      Get dev profile
  // @access    Public
  if (req.method === "GET") {
    try {
      //   Search dev in db (using id coming from query)
      const dev = await Dev.findById(req.query.id);

      // Return dev
      res.status(200).json(dev);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
  // @route     PUT api/devs/:id
  // @desc      Edit dev profile
  // @access    Private
  if (req.method === "PUT") {
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

    // Build dev object with new fields
    const devFields = {};
    if (username) devFields.username = username;
    if (first_name) devFields.first_name = first_name;
    if (last_name) devFields.last_name = last_name;
    if (email) devFields.email = email;
    if (gender) devFields.gender = gender;
    if (location) devFields.location = location;
    if (skills) devFields.skills = skills;
    if (description) devFields.description = description;
    if (avatar) devFields.avatar = avatar;
    if (website) devFields.website = website;
    if (twitter) devFields.twitter = twitter;
    if (linkedin) devFields.linkedin = linkedin;
    if (github) devFields.github = github;

    try {
      // Search for dev (in db) that matches the id (from query)
      let dev = await Dev.findById(req.query.id);
      if (!dev) return res.status(404).json("Not found");

      // @todo check if user owns the profile

      // Update dev profile in db
      dev = await Dev.findByIdAndUpdate(
        req.query.id,
        { $set: devFields },
        { new: true }
      );

      // Return updated profile
      res.status(200).json(dev);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
    // @route     DELETE api/dev/:id
    // @desc      Delete dev profile
    // @access    Private
  } else if (req.method === "DELETE") {
    try {
      // Check if user with id (coming from query) exists
      let dev = await Dev.findById(req.query.id);
      if (!dev) return res.status(404).json("Not found");

      // @todo check if user owns the profile

      //  Find user with id (coming from query) and remove from db
      await Dev.findByIdAndRemove(req.query.id);
      return res.status(200).json("Removed");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
};

export default connectDB(dev);
