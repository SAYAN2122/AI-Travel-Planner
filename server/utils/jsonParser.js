const parseAIResponse = (response) => {
  try {
    // Remove markdown code fences if present
    let cleaned = response.trim();

    cleaned = cleaned.replace(/```json/gi, "");
    cleaned = cleaned.replace(/```/g, "");

    // Find the first "{" and the last "}"
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");

    if (start === -1 || end === -1) {
      throw new Error("No JSON object found.");
    }

    cleaned = cleaned.substring(start, end + 1);

    return JSON.parse(cleaned);
  } catch (error) {
    throw new Error("Unable to parse AI response.");
  }
};

export default parseAIResponse;