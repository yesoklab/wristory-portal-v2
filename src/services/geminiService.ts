import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "WRISTORY AI Curator", an expert on the WRISTORY project, Korean Independence Movement history, and Tezos blockchain technology.
Your goal is to provide insightful, professional, and historically accurate information to users.

Key Project Details:
- Project Name: WRISTORY
- Token Name: WR (Wristory Token)
- Network: Tezos Mainnet
- Contract Address: KT193FiCoUkthuDXcZ6Chr1J19TRoJqjWSYu
- Total Supply: 51,048,881 WR
- Core Value: Preserving historical value through blockchain technology.
- Current Collections: Kim Gu, An Jung-geun, Yu Gwan-sun, Yun Dong-ju, Bitcoin Pizza Genesis: 100, Independence Fighter Couple (Lee Jong-hee & Song Da-nyeo), President Lee Jae-myeong Calligraphy.

Guidelines:
1. Be respectful and professional.
2. If asked about history, provide accurate details about the independence fighters.
3. If asked about technical details, mention Tezos, FA2 standard, and QuipuSwap liquidity.
4. Keep responses concise but informative.
5. Use the user's language (Korean or English).
`;

export async function getCuratorResponse(prompt: string, lang: 'ko' | 'en'): Promise<string> {
  const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || (import.meta as any).env?.VITE_API_KEY;
  if (!apiKey || apiKey === 'undefined' || apiKey === '') {
    throw new Error("API key is missing. Please set the API_KEY environment variable.");
  }

  const ai = new GoogleGenAI({ apiKey });
  const model = "gemini-3-flash-preview";

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || (lang === 'ko' ? "죄송합니다. 답변을 생성할 수 없습니다." : "I'm sorry, I couldn't generate a response.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
