import Groq from "groq-sdk";

const generateAIResponse = async (prompt) => {
  try {
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are an expert travel planner. Always return ONLY valid JSON. Never use markdown or explanations.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_completion_tokens: 2000,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Groq Error:", error);
    throw new Error("Failed to generate AI response.");
  }
};

export default generateAIResponse;