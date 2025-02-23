// src/jobs/mailingJob.js
import cron from 'node-cron';
import Subscription from '../models/Subscription.js';
import { getResponse } from '../services/llmService.js';
import { generateAudio } from '../services/ttsService.js';
import { sendEmail } from '../services/emailService.js';

const scheduleMailingJobs = async () => {
  try {
    const currentHour = new Date().getHours();
    console.log(`Running mailing job for hour: ${currentHour}`);
    // Fetch active subscriptions with mailingTime equal to the current hour
    const subscriptions = await Subscription.find({ mailingTime: currentHour, isActive: true });
    
    for (const sub of subscriptions) {
      try {
        // Generate LLM response based on user's topics of interest
        const llmResponse = await getResponse(sub.topicsOfInterest);
        // Generate audio from the LLM response
        const audioData = await generateAudio(llmResponse);
        // Send the email with the audio attached
        await sendEmail(sub.email, audioData);
      } catch (error) {
        console.error(`Error processing subscription for ${sub.email}:`, error);
      }
    }
  } catch (error) {
    console.error('Error in mailing job:', error);
  }
};

export default {
  start: () => {
    // Schedule the job to run at minute 0 of every hour
    cron.schedule('0 * * * *', scheduleMailingJobs);
    console.log('Mailing job scheduled to run every hour.');
  }
};
