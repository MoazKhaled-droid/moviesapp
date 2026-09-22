import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const SYSTEM_PROMPT = `
You are CineVault AI, an expert movie and TV show assistant. 
Provide tailored, engaging, and concise recommendations. 
Keep your answers brief and directly related to movies and TV shows only.
If the user asks about anything unrelated, politely explain that you can only help with movie and TV-related questions.
`;

export async function sendMessageToAi(messages) {
  try {
    const input = messages.map((message) => ({
      type: message.role === "user" ? "user_input" : "model_output",
      content: [
        {
          type: "text",
          text: message.content,
        },
      ],
    }));

    const interaction = await ai.interactions.create({
      model: "gemini-3.6-flash", 
      system_instruction: SYSTEM_PROMPT,
      input,
    });

    if (!interaction.output_text) {
      throw new Error("The assistant returned an empty response.");
    }

    return interaction.output_text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting right now. Please try again later.";
  }
}

export const startAiChat = () => {
  return null;
};