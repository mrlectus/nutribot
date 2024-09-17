import { vertex } from "@ai-sdk/google-vertex";
import { convertToCoreMessages, streamText } from "ai";

/**
 * Defines a constant `maxDuration` with a value of 30.
 *
 * Asynchronously handles a POST request, extracting `messages` and `payload` from the request body.
 * Uses the Gemini-1.5-pro model with search grounding to generate a response based on the client's dietary preferences, allergies,
 * country, nutritional goals, and other considerations.
 * Converts the messages into a format suitable for the model and streams the generated response back as a data stream.
 *
 * Returns the response as a streamed text data.
 */

export const maxDuration = 30;
export const POST = async (req: Request) => {
  const { messages, payload } = await req.json();
  const result = await streamText({
    model: vertex("gemini-1.5-pro", {
      useSearchGrounding: true,
    }),
    system: `You are a world professional dietician and nutritionist. here is what you have to know about the client. The client has this dietary preference ${payload.dietaryPreferences}. the client is alergic to this foods ${payload.allergies}. the client is from this country ${payload.country}. the client would like to achieve this nutritional goal ${payload.nutritionalGoals}. Here are some other things you might consider ${payload.others}. please respond to compliment in kind.`,
    messages: convertToCoreMessages(messages),
  });
  return result.toDataStreamResponse();
};
