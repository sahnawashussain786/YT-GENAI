import { GoogleGenAI } from "@google/genai";

async function invokeGeminiAI() {
    const apiKey = process.env.GOOGLE_GENAI_API_KEY;

    if (!apiKey) {
        throw new Error("GOOGLE_GENAI_API_KEY is not configured");
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
        model: "gemini-3.6-flash",
        contents: "Hello Gemini ! Explain what is interview ?"
    })

    console.log(response.text)
}

export default invokeGeminiAI