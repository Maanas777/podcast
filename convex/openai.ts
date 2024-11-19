// import { action, query } from "./_generated/server";
// import { v } from "convex/values";

// import OpenAI from "openai";
// import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export const generateAudioAction = action({
//   args: { input: v.string(), voice: v.string() },
//   handler: async (_, { voice, input }) => {
//      console.log(voice,input,"from the apiijiojoij")
//     const mp3 = await openai.audio.speech.create({
//       model: "tts-1",
//       voice: voice as SpeechCreateParams["voice"],
//       input: input,
//     });

//     console.log(mp3,"this is the audio")

//     const buffer = await mp3.arrayBuffer();
//     return buffer;
//   },
// });


import { action } from "./_generated/server";
import { v } from "convex/values";
import fetch from "node-fetch";
const DEEPAI_API_KEY = process.env.DEEPAI_API_KEY as string;
const VOICERSS_API_KEY = process.env.VOICERSS_API_KEY;

export const generateAudioAction = action({
  args: { input: v.string(), voice: v.string() },
  handler: async (_, { voice, input }) => {
   

    const language =  voice;
    const ENDPOINT = `https://api.voicerss.org/`;

    const queryParams = new URLSearchParams({
      key: VOICERSS_API_KEY!,
      hl: language,
      src: input,
      f: "48khz_16bit_stereo",
    });

    try {
      const response = await fetch(`${ENDPOINT}?${queryParams.toString()}`);
      if (!response.ok) {
        console.error("Error with Voicerss API:", response.statusText);
        throw new Error("Failed to generate audio.");
      }

      const audioBuffer = await response.arrayBuffer()
      console.log(response,"audioooo")

      return audioBuffer;
    } catch (error) {
      console.error("Error generating audio:", error);
      throw new Error("Audio generation failed.");
    }
  },
});


// export const generateThumbnailAction = action({
//     args: { prompt: v.string() }, 
//     handler: async (_, { prompt }) => {
//       try {
//         // Make a POST request to the DeepAI API for text-to-image generation
//         const response = await fetch("https://api.deepai.org/api/text2img", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "api-key": DEEPAI_API_KEY // Replace with your API key
//           },
//           body: JSON.stringify({ prompt }), // Send the text prompt
//         });
//        console.log(response,"image response")
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.error || "Failed to generate image");
//         }
  
//         // Parse and return the API's response
//         const data = await response.json();
//         console.log(data,"image dataa")
//         return { imageUrl: data.output_url };
//       } catch (error) {
//         console.error("Error generating image:", error);
//         throw new Error("Image generation failed. Please try again.");
//       }
//     },
//   });


