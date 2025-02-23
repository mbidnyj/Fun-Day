// src/controllers/subscriptionController.js
import Subscription from '../models/Subscription.js';

export const subscribe = async (req, res) => {
  const { email, topicsOfInterest, language, mailingTime } = req.body;
  if (!email || !topicsOfInterest || mailingTime === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  try {
    const newSubscription = new Subscription({
      email,
      topicsOfInterest,
      languages: language,
      mailingTime,
      isActive: true
    });
    await newSubscription.save();
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const unsubscribe = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  
  try {
    const subscription = await Subscription.findOne({ email });
    if (!subscription) {
      return res.status(404).json({ error: 'Subscription not found' });
    }
    subscription.isActive = false;
    await subscription.save();
    res.status(200).json({ message: 'Unsubscribed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
