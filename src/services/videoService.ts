import { GoogleGenAI } from "@google/genai";

export interface VideoGenerationResult {
  done: boolean;
  uri?: string;
  error?: string;
}

export async function generatePromoVideo(prompt: string): Promise<string> {
  const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || (import.meta as any).env?.VITE_API_KEY;
  if (!apiKey || apiKey === 'undefined' || apiKey === '') {
    throw new Error("API key is missing. Please set the API_KEY environment variable.");
  }

  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const operation = await ai.models.generateVideos({
      model: 'veo-3.1-lite-generate-preview',
      prompt,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    if (!operation.name) {
      throw new Error("Failed to get operation name from video generation.");
    }

    return operation.name; // Return the operation name for polling
  } catch (error) {
    console.error("Video Generation Error:", error);
    throw error;
  }
}

export async function checkVideoStatus(operationName: string): Promise<VideoGenerationResult> {
  const apiKey = (typeof process !== 'undefined' && process.env?.API_KEY) || (import.meta as any).env?.VITE_API_KEY;
  if (!apiKey || apiKey === 'undefined' || apiKey === '') {
    throw new Error("API key is missing.");
  }

  const ai = new GoogleGenAI({ apiKey });

  try {
    const operation = await ai.operations.getVideosOperation({ operation: { name: operationName } as any });
    
    if (operation.done) {
      const uri = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (uri) {
        return { done: true, uri: `${uri}?x-goog-api-key=${apiKey}` };
      }
      return { done: true, error: "Video generation failed or no URI returned." };
    }
    
    return { done: false };
  } catch (error) {
    console.error("Check Video Status Error:", error);
    throw error;
  }
}
