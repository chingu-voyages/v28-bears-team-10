import connectDB from '../../middleware/db'

import Charity from '../../models/charity';

const charity = async (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json('Get charity')
    } else if (req.method === 'POST') {
        res.status(200).json('Post charity')
    } else if (req.method === 'PUT') {
        res.status(200).json('Put charity')
    } else if (req.method === 'DELETE') {
        res.status(200).json('Delete charity')
    }
}

export default connectDB(charity);