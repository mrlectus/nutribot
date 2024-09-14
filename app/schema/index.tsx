import { z } from "zod";

export const breakfastMealSchema = z.object({
  breakfast: z
    .array(
      z.object({
        name: z.string().describe("The name of the delicacy"),
        description: z
          .string()
          .describe("A very brief description of the delicacy"),
        calories: z
          .string()
          .describe("amount of calories in the delicacy, numbers only"),
        recipe: z
          .string()
          .describe(
            "The recipe used in preparing the delicacy, in proper markdown format",
          ),
      }),
    )
    .min(3)
    .max(3),
});

export const lunchMealSchema = z.object({
  lunch: z
    .array(
      z.object({
        name: z.string().describe("The name of the delicacy"),
        description: z
          .string()
          .describe("A very brief description of the delicacy"),
        calories: z
          .string()
          .describe("amount of calories in the delicacy, numbers only"),
        recipe: z
          .string()
          .describe(
            "The recipe used in preparing the delicacy, in proper markdown format",
          ),
      }),
    )
    .min(3)
    .max(3),
});

export const dinnerMealSchema = z.object({
  dinner: z
    .array(
      z.object({
        name: z.string().describe("The name of the delicacy"),
        description: z
          .string()
          .describe("A very brief description of the delicacy"),
        calories: z
          .string()
          .describe("amount of calories in the delicacy, numbers only"),
        recipe: z
          .string()
          .describe(
            "The recipe used in preparing the delicacy, in proper markdown format",
          ),
      }),
    )
    .min(3)
    .max(3),
});

export type Meal = {
  name: string;
  description: string;
  calories: string;
  recipe: string;
};
