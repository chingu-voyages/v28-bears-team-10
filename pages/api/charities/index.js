import connectDB from '../../../middleware/db';

import Charity from '../../../models/Charity.js';

const charities = async (req, res) => {
    // @route     GET api/charities
    // @desc      Get all charities
    // @access    Public
    if (req.method === 'GET') {
        try {
            // Get all devs in database
            const charities = await Charity.find();

            res.status(200).json(charities);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }

        // @route     POST api/charities
        // @desc      Add new dev
        // @access    Public
    } else if (req.method === 'POST') {
        // @todo add form data validation
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

        try {
            // Create new dev object with fields coming from db
            const newCharity = new Charity({
                name,
                email,
                location,
                description,
                avatar,
                job_listings,
                website,
                twitter
            });

            // Save dev to db
            const charity = await newCharity.save();

            // Return new dev
            res.status(200).json(charity);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
};

export default connectDB(charities);
