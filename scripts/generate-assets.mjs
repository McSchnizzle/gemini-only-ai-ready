import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function generateImage(prompt, filename) {
  console.log(`Generating ${filename}...`);
  console.log(`Prompt: ${prompt}`);

  try {
    // The model name from the list
    const model = genAI.getGenerativeModel({ model: "gemini-3-pro-image-preview" });
    
    // For image generation models in Gemini, we often send the prompt as text.
    // The response should contain the image data.
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // Check for inline data (base64 images)
    // Note: The structure might vary. Often it is candidates[0].content.parts[0].inlineData
    if (response.candidates && response.candidates.length > 0) {
        const parts = response.candidates[0].content.parts;
        // Look for the part that has inlineData (image)
        const imagePart = parts.find(p => p.inlineData);

        if (imagePart) {
            const base64Image = imagePart.inlineData.data;
            const buffer = Buffer.from(base64Image, "base64");
            const outputPath = path.join(process.cwd(), "public", "images", filename);
            // Ensure directory exists
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
            fs.writeFileSync(outputPath, buffer);
            console.log(`✅ Saved to ${outputPath}`);
            return outputPath;
        } else {
            console.error("❌ No inline image data found in response parts.");
             console.log(JSON.stringify(response, null, 2));
        }
    } else {
        console.error("❌ No candidates in response.");
    }

  } catch (error) {
    console.error(`❌ Failed to generate ${filename}:`, error);
  }
}

const onePagerAsset = {
    filename: "marketing-onepager.png",
    prompt: "Photorealistic scene: A small business owner (man in flannel shirt) and a professional consultant (woman) looking at a sleek silver device on a desk. Collaborative, empowering atmosphere. Soft natural light. High quality, 4k."
};

async function main() {
    await generateImage(onePagerAsset.prompt, onePagerAsset.filename);
}

main();
