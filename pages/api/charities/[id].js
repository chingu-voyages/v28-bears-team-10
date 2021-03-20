import connectDB from '../../../middleware/db';

import Charity from '../../../models/Charity';

const charity = async (req, res) => {
    // @route     GET api/charities/:id
    // @desc      Get dev profile
    // @access    Public
    if (req.method === 'GET') {
        try {
            //   Search charity in db (using id coming from query)
            const charity = await Charity.findById(req.query.id);

            // Return charity
            res.status(200).json(charity);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
    // @route     PUT api/charities/:id
    // @desc      Edit charity profile
    // @access    Private
    if (req.method === 'PUT') {
        // Destructure data coming from form
        const {
            name,
            email,
            location,
            description,
            avatar,
            job_listings,
            website,
            twitter
        } = req.body;

        // Build dev object with new fields
        const charFields = {};
        if (name) charFields.name = name;
        if (email) charFields.email = email;
        if (location) charFields.location = location;
        if (description) charFields.description = description;
        if (avatar) charFields.avatar = avatar;
        if (job_listings) charFields.job_listings = job_listings;
        if (website) charFields.website = website;
        if (twitter) charFields.twitter = twitter;

        try {
            // Search for dev (in db) that matches the id (from query)
            let charity = await Charity.findById(req.query.id);
            if (!charity) return res.status(404).json('Not found');

            // @todo check if user owns the profile

            // Update dev profile in db
            charity = await Charity.findByIdAndUpdate(
                req.query.id,
                { $set: charFields },
                { new: true }
            );

            // Return updated profile
            res.status(200).json(charity);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
        // @route     DELETE api/charities/:id
        // @desc      Delete charity profile
        // @access    Private
    } else if (req.method === 'DELETE') {
        try {
            // Check if user with id (coming from query) exists
            let charity = await Charity.findById(req.query.id);
            if (!charity) return res.status(404).json('Not found');

            // @todo check if user owns the profile

            //  Find user with id (coming from query) and remove from db
            await Charity.findByIdAndRemove(req.query.id);
            return res.status(200).json('Removed');
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

export default connectDB(charity);
