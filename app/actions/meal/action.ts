"use server";
import {
  breakfastMealSchema,
  dinnerMealSchema,
  lunchMealSchema,
} from "@/app/schema";
import { vertex } from "@ai-sdk/google-vertex";
import { generateObject } from "ai";

/**
 * Asynchronously generates a personalized breakfast plan based on the client's
 * dietary preferences, allergies, nutritional goals, and other factors.
 * The function utilizes a machine learning model (Gemini-1.5-pro) with search grounding
 * to provide tailored recommendations, taking into account the client's country and other specified details.
 * Returns the generated breakfast plan in an object.
 */

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

/**
 * Asynchronously generates a personalized lunch plan based on the client's dietary preferences, allergies,
 * nutritional goals, and other relevant factors. The function uses the Gemini-1.5-pro model with search grounding
 * to create a tailored lunch plan for the client, taking into account their country and other specific details.
 * Returns the generated lunch plan in an object.
 */

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

/**
 * Asynchronously generates a personalized dinner plan based on the client's dietary preferences, allergies,
 * nutritional goals, and additional considerations. The function utilizes the Gemini-1.5-pro model with search grounding
 * to provide a customized dinner plan that suits the client's preferences, goals, and country-specific factors.
 * Returns the generated dinner plan in an object.
 */
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
