/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// import { Ai } from '@cloudflare/ai'

// export default {
// 	async fetch(request, env, ctx) {
//     const ai = new Ai(env.AI)

//     const answer = await ai.run(
//       '@cf/meta/llama-2-7b-chat-int8',
//       {
//         messages: [
//           { role: 'user', content: `What is the square root of 9?` }
//         ]
//       }
//     )

//     return new Response(JSON.stringify(answer))
// 	}
// }


import { Ai } from '@cloudflare/ai'



export default {
  async fetch(request, env) {
    const ai = new Ai(env.AI);

    const inputs = {
      // prompt: "Translate the following English letters into sign language: 'H'", #A 
      // prompt: "Generate an image of a single person demonstrating sign language for letter 'C' with artistic and realistic aesthetics.",
      // prompt: "cyberpunk cat says hi in american sign language",
      // prompt: "ellen degeneres shows letter A using sign language, by doing - extend your dominant hand with fingers closed into a fist, and position it in front of you, facing outward. Within this fist, the thumb is raised and positioned alongside the side of the fist. This handshape resembles a lowercase 'a' rotated upside down, where the upright thumb acts as a visual reminder of the serif that extends from the side of the small letter 'a'.",
      // prompt: "einstein shows rain in sign language",
      // prompt: "Generate an image of Albert Einstein specifically demonstrating the sign language expression for rain.",
    // prompt: "Generate a classic and entertaining image of Charlie Chaplin using sign language to convey the letter 'C'.",
    prompt: "elon musk  showing sign language for letter o",
    };

    const response = await ai.run("@cf/stabilityai/stable-diffusion-xl-base-1.0", inputs);

    return new Response(response, {
      headers: {
        "content-type": "image/png",
      },
    });
  }
};