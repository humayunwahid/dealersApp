// dealer-app/models/Inventory.js

import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  dealer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dealer',
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  normalPrice: {
    type: Number,
    required: true,
  },
  dealerPrice: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.models.Inventory || mongoose.model('Inventory', InventorySchema);
