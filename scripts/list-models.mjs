import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

// Load environment variables
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

const API_KEY = process.env.GEMINI_API_KEY;

async function listModels() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  try {
      // Note: getGenerativeModel doesn't list models. We need the model manager or just fetch the list via REST.
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
      const data = await response.json();
      if (data.models) {
          console.log("Available Models:");
          data.models.forEach(m => console.log(`- ${m.name} (${m.supportedGenerationMethods})`));
      } else {
          console.log("No models found or error:", data);
      }
  } catch (error) {
      console.error("Error listing models:", error);
  }
}

listModels();
