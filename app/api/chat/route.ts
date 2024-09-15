import { vertex } from "@ai-sdk/google-vertex";
import { convertToCoreMessages, streamText } from "ai";

export const maxDuration = 30;
export const POST = async (req: Request) => {
  const { messages, payload } = await req.json();
  const result = await streamText({
    model: vertex("gemini-1.5-pro", {
      useSearchGrounding: true,
    }),
    system: `You are a world professional dietician and nutritionist. here is what you have to know about the client. The client has this dietary preference ${payload.dietaryPreferences}. the client is alergic to this foods ${payload.allergies}. the client is from this country ${payload.country}. the client would like to achieve this nutritional goal ${payload.nutritionalGoals}. Here are some other things you might consider ${payload.others}.`,
    messages: convertToCoreMessages(messages),
  });
  return result.toDataStreamResponse();
};
