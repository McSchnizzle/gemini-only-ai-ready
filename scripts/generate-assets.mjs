import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load environment variables manually since we are running a script
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY not found in .env");
  process.exit(1);
}

// NOTE: The @google/generative-ai SDK usually supports text/multimodal. 
// For Image Generation (Imagen), it often uses a specific model or REST endpoint.
// We will try using the SDK with the user-specified model "gemini-3-pro-image-preview".
// If the SDK doesn't support returning raw image bytes for this model, 
// we might need to adjust to use the REST API directly.

// However, based on recent updates, "gemini-pro" and friends are for text/chat.
// Imagen usage via the Gemini API key often looks like this:
// https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict

async function generateImage(prompt, filename) {
  console.log(`Generating ${filename}...`);
  console.log(`Prompt: ${prompt}`);

  // Trying the user-suggested model name
  const modelName = "gemini-3-pro-image-preview"; 
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:predict?key=${API_KEY}`;
  
  const payload = {
    instances: [
      {
        prompt: prompt,
      }
    ],
    parameters: {
      sampleCount: 1,
      aspectRatio: "1:1", 
      outputOptions: {
          mimeType: "image/png"
      }
    }
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    
    // The structure for Imagen response is usually:
    // { predictions: [ { bytesBase64Encoded: "..." } ] }
    
    if (data.predictions && data.predictions.length > 0) {
        const base64Image = data.predictions[0].bytesBase64Encoded;
        const buffer = Buffer.from(base64Image, "base64");
        const outputPath = path.join(process.cwd(), "public", "images", filename);
        fs.writeFileSync(outputPath, buffer);
        console.log(`✅ Saved to ${outputPath}`);
    } else {
        console.error("❌ No image data received:", JSON.stringify(data, null, 2));
    }

  } catch (error) {
    console.error(`❌ Failed to generate ${filename}:`, error.message);
  }
}

const assets = [
  {
    filename: "logo.png",
    prompt: "A flat, vector-style logo for an AI consultancy named 'Vital Enterprises'. Symbol: Fusion of a 'digital circuit node' and a 'conifer tree/fern leaf'. Colors: Deep Emerald Green (#2F4F4F) and Metallic Silver. Minimalist, trustworthy, white background."
  },
  {
    filename: "hero-bg.png",
    prompt: "High-quality photorealistic image of a foggy forest in the Pacific Northwest, overlaid with a subtle, geometric 'white wireframe' neural network node pattern. Moody, atmospheric, 'Pacific Northwest Modern Tech' aesthetic. Wide aspect ratio."
  },
  {
    filename: "hardware.png",
    prompt: "A sleek silver AI device (Nvidia DGX Spark) sitting on a wooden desk in a modern office. Natural 'Golden Hour' lighting. Subtle holographic data dashboard floating slightly above the device. Photorealistic."
  },
  {
    filename: "marketing-onepager.png",
    prompt: "Photorealistic scene: A small business owner (man in flannel shirt) and a professional consultant (woman) looking at a sleek silver device on a desk. Collaborative, empowering atmosphere. Soft natural light."
  }
];

async function main() {
  for (const asset of assets) {
    // Adjust aspect ratio for hero image
    if (asset.filename === 'hero-bg.png') {
       // Note: The simple REST call above has fixed aspect ratio. 
       // For this script, we'll stick to 1:1 or 4:3 (default) unless we change params.
       // Let's keep it simple for now.
    }
    await generateImage(asset.prompt, asset.filename);
  }
}

main();
