import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCIF4Rj_7N8RuARQQDdYEBPmRRIm5r4qy8";
const genAI = new GoogleGenerativeAI(apiKey);

async function listModels() {
    try {
        console.log("Fetching available models...");
        // For older versions of the SDK, listModels might be on the main class or accessible differently
        // But let's try a simple generation test with a fallback model to see what happens

        const possibleModels = ["gemini-pro", "gemini-1.0-pro", "gemini-1.5-flash", "gemini-1.5-pro"];

        for (const modelName of possibleModels) {
            process.stdout.write(`Testing model: ${modelName}... `);
            try {
                const model = genAI.getGenerativeModel({ model: modelName });
                const result = await model.generateContent("Hello, are you there?");
                console.log("SUCCESS! ✅");
            } catch (e) {
                console.log("FAILED ❌");
            }
        }

    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
