// dealer-app/pages/api/test-db.js

import dbConnect from '../../lib/dbConnect';
import Dealer from '../../models/Dealer';

export default async function handler(req, res) {
  try {
    await dbConnect();

    // Just a quick test: create a new dealer or retrieve existing
    if (req.method === 'POST') {
      const { name, email } = req.body;
      const newDealer = await Dealer.create({ name, email });
      return res.status(201).json({ success: true, data: newDealer });
    }

    // For GET, list all dealers
    if (req.method === 'GET') {
      const dealers = await Dealer.find({});
      return res.status(200).json({ success: true, data: dealers });
    }

    // Otherwise, method not allowed
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
}
