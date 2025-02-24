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
const getResponse = async (topics) => {
  const basePrompt = "Create a sharp and precise political joke in the style of George Carlin. Be as direct and uncompromising as he was known to be.";
  
  try {
    const response = await openai.completions.create({
      model: "gpt-4",
      prompt: `${basePrompt} Focus on these topics: ${topics.join(', ')}`,
    });
    
    const text = response.choices[0].text.trim();
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

export { getResponse };
