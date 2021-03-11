import connectDB from '../../middleware/db'

import Dev from '../../models/dev';

const dev = async (req, res) => {
  if (req.method === 'GET') {
    res.status(200).json('Get dev')
  } else if (req.method === 'POST') {
    res.status(200).json('Post dev')
  } else if (req.method === 'PUT') {
    res.status(200).json('Put dev')
  } else if (req.method === 'DELETE') {
    res.status(200).json('Delete dev')
  }
}

export default connectDB(dev);
