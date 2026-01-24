import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load .env.local manually since we are running a standalone script
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    const envConfig = dotenv.parse(fs.readFileSync(envPath));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
}

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error("❌ No GEMINI_API_KEY found in .env.local");
    process.exit(1);
}

console.log(`🔑 Testing API Key: ${apiKey.substring(0, 5)}...`);

async function testConnection() {
    // 1. Test List Models to see what's enabled
    console.log("\n📡 contacting Google API to list models...");
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            console.error("❌ API Error:", JSON.stringify(data, null, 2));
            return;
        }

        console.log("✅ Success! Available Models:");
        if (data.models) {
            data.models.forEach((m: any) => {
                if (m.name.includes("gemini")) {
                    console.log(`   - ${m.name}`);
                }
            });
        } else {
            console.log("   (No models found in response?)", data);
        }

        // 2. Test Generation with the first available Gemini model
        const targetModel = data.models.find((m: any) => m.name.includes("gemini-1.5-flash"))?.name ||
            data.models.find((m: any) => m.name.includes("gemini-pro"))?.name;

        if (targetModel) {
            console.log(`\n🧪 Testing generation with: ${targetModel}`);
            const genUrl = `https://generativelanguage.googleapis.com/v1beta/${targetModel}:generateContent?key=${apiKey}`;
            const genRes = await fetch(genUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: "Hello" }] }] })
            });
            const genData = await genRes.json();
            if (genRes.ok) {
                console.log("✅ Generation works! Response:", genData.candidates?.[0]?.content?.parts?.[0]?.text);
            } else {
                console.error("❌ Generation failed:", genData);
            }
        }

    } catch (e) {
        console.error("❌ Network or Script Error:", e);
    }
}

testConnection();
