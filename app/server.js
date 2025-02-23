// server.js
import './src/config/env.js'

import express from 'express';
import { connectDB } from './src/config/db.js';
import subscriptionRoutes from './src/routes/subscriptionRoutes.js';
import mailingJob from './src/jobs/mailingJob.js';

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register API routes
app.use('/api', subscriptionRoutes);

// Start mailing cron job
mailingJob.start();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
