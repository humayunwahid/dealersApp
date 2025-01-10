// dealer-app/models/Dealer.js

import mongoose from 'mongoose';

const DealerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  businessDescription: {
    type: String,
  },
  profileImage: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  // Add more fields as needed
}, { timestamps: true });

// Avoid recompiling model if it already exists
export default mongoose.models.Dealer || mongoose.model('Dealer', DealerSchema);
