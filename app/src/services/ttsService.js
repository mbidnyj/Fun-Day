// src/services/ttsService.js
import axios from 'axios';

/**
 * Generates audio data for given text using the 11Labs TTS API.
 * @param {string} text - The text to convert to speech.
 * @returns {Promise<Buffer>} - Buffer containing the audio data.
 */
export const generateAudio = async (text) => {
  const voiceId = process.env.ELEVEN_LABS_VOICE_ID;
  const apiKey = process.env.ELEVEN_LABS_API_KEY;
  const url = `https://api.11labs.io/v1/text-to-speech/${voiceId}`;

  try {
    const response = await axios.post(url, {
      text: text,
      // You can add additional voice settings here if needed.
    }, {
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey
      }
    });
    return Buffer.from(response.data);
  } catch (error) {
    console.error(
      'Error generating audio with 11Labs:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
