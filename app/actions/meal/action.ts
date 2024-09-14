"use server";
import {
  breakfastMealSchema,
  dinnerMealSchema,
  lunchMealSchema,
} from "@/app/schema";
import { vertex } from "@ai-sdk/google-vertex";
import { generateObject } from "ai";

export async function generateBreakfast(
  question: string,
  payload: {
    dietaryPreferences: string;
    allergies: string;
    nutritionalGoals: string;
    country: string;
    others: string;
  },
) {
  "use server";
  const { object: text } = await generateObject({
    model: vertex("gemini-1.5-pro", {
      useSearchGrounding: true,
    }),
    system: `You are a professional dietitian and you are tasked with creating a breakfast plan for a client who is from country ${payload.country} and has the following dietary preference ${payload.dietaryPreferences} the client also has the following alergies ${payload.allergies}, the client would like to achive the following nutritional goal "${payload.nutritionalGoals}. here are some other things you might consider ${payload.others}"`,
    prompt: question,
    schema: breakfastMealSchema,
  });
  return { text };
}

export async function generateLunch(
  question: string,
  payload: {
    dietaryPreferences: string;
    allergies: string;
    nutritionalGoals: string;
    country: string;
    others: string;
  },
) {
  "use server";
  const { object: text } = await generateObject({
    model: vertex("gemini-1.5-pro", {
      useSearchGrounding: true,
    }),
    system: `You are a professional dietitian and you are tasked with creating a lunch plan for a client who is from country ${payload.country} and has the following dietary preference "${payload.dietaryPreferences}" the client also has the following alergies "${payload.allergies}", the client would like to achive the following nutritional goal "${payload.nutritionalGoals} . here are some other things you might consider ${payload.others}"`,
    prompt: question,
    schema: lunchMealSchema,
  });
  return { text };
}

export async function generateDinner(
  question: string,
  payload: {
    dietaryPreferences: string;
    allergies: string;
    nutritionalGoals: string;
    country: string;
    others: string;
  },
) {
  "use server";
  const { object: text } = await generateObject({
    model: vertex("gemini-1.5-pro", {
      useSearchGrounding: true,
    }),
    system: `You are a professional dietitian and you are tasked with creating a dinner plan for a client who is from country ${payload.country} and has the following dietary preference "${payload.dietaryPreferences}" the client also has the following alergies "${payload.allergies}", the client would like to achive the following nutritional goal "${payload.nutritionalGoals}. here are some other things you might consider ${payload.others}"`,
    prompt: question,
    schema: dinnerMealSchema,
  });
  return { text };
}
