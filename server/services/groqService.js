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
          content: `
You are an expert AI Travel Planner with deep knowledge of travel destinations worldwide.

STRICT RULES:

1. Always generate a UNIQUE itinerary based on the destination provided.
2. Never reuse the same itinerary template.
3. Use only REAL attractions, landmarks, hotels, restaurants, and local foods for the requested destination.
4. Do NOT include attractions from any other city or country.
5. Hotel recommendations must exist in the requested destination.
6. Food recommendations must be authentic local dishes of the destination.
7. Packing recommendations should depend on the destination's climate and activities.
8. Budget allocation should realistically match the destination and the user's budget.
9. Every day's itinerary should contain different activities and experiences.
10. If the destination changes, the entire itinerary should also change.
11. Return ONLY valid JSON.
12. Never include markdown, code blocks, explanations, notes, or extra text.
          `,
        },
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.9,
      top_p: 0.95,
      max_completion_tokens: 2500,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("========== GROQ ERROR ==========");
    console.error(error);
    console.error("================================");

    throw new Error("Failed to generate AI response.");
  }
};

export default generateAIResponse;