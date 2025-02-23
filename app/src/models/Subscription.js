// src/models/Subscription.js
import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  topicsOfInterest: {
    type: [String],
    required: true
  },
  languages: {
    type: String // optional field
  },
  mailingTime: {
    type: Number, // hour of day (0-23)
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

const Subscription = mongoose.model('Subscription', SubscriptionSchema);
export default Subscription;
