"use server";

import { vertex } from "@ai-sdk/google-vertex";
import { generateObject, streamText } from "ai";
import z from "zod";

export async function getAnswer(question: string) {
  "use server";
  const { object: text } = await generateObject({
    model: vertex("gemini-1.5-pro", {
      useSearchGrounding: true,
    }),
    system: "You generate math questions randomly",
    schema: z.object({
      test: z.array(
        z.object({
          question: z.string().describe("The question"),
          options: z
            .array(z.string())
            .describe(
              "The options to pick from where one of the option is the answer",
            ),
          answer: z
            .string()
            .describe("The answer to the question with the correct"),
        }),
      ),
    }),
  });

  return { text };
}
