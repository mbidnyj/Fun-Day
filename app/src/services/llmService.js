// src/services/llmService.js
import OpenAI from 'openai';

const openai = new OpenAI({
  baseURL: undefined, // default OpenAI URL
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Generates a response based on the provided topics.
 * @param {string[]} topics - Array of topics of interest.
 * @returns {Promise<string>} - The generated summary text.
 */
export const getResponse = async () => {
  const prompt = "What's the capital of Ukraine?";
  try {
    const response = await openai.completions.create({
      model: "gpt-4o",
      prompt
    });
    const text = response.data.choices[0].text.trim();
    console.log("LLM Response:", text);
    return text;
  } catch (error) {
    console.error(
      "Error calling OpenAI API:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
