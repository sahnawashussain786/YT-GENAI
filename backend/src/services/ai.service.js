import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import {zodToJsonSchema} from 'zod-to-json-schema'

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENAI_API_KEY
})

async function generateInterviewReport({resume,selfDescription,jobDescription}) {
    
}

export default invokeGeminiAI;
