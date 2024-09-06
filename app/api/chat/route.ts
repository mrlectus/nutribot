import { vertex } from "@ai-sdk/google-vertex";
import { convertToCoreMessages, streamText } from "ai";

export const maxDuration = 30;
export const POST = async (req: Request) => {
  const { messages } = await req.json();

  const result = await streamText({
    model: vertex("gemini-1.5-pro", {
      useSearchGrounding: true,
    }),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
};
