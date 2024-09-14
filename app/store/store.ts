import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

type Step = {
  step: number;
  next: () => void;
  prev: () => void;
};

type OnBoarding = {
  done: boolean | undefined;
  setDone: () => void;
};

type UserPreferences = {
  dietaryPreferences: string;
  nutritionalGoal: string;
  country: string;
  foodAlergies: string;
  others: string;
  setDietaryPreferences: (dietaryPreferences: string) => void;
  setNutritionalGoal: (nutritionalGoal: string) => void;
  setCountry: (country: string) => void;
  setFoodAlergies: (foodAlergies: string) => void;
  setOthers: (others: string) => void;
};

export const useOnBoarding = create<OnBoarding>()(
  persist(
    immer((set) => ({
      done: false,
      setDone: () =>
        set((state) => {
          state.done = true;
        }),
    })),
    { name: "onboard" },
  ),
);

export const useUserPreferences = create<UserPreferences>()(
  persist(
    immer((set) => ({
      dietaryPreferences: "",
      nutritionalGoal: "",
      country: "",
      foodAlergies: "",
      others: "",
      setDietaryPreferences: (dietaryPreferences: string) =>
        set((state) => {
          state.dietaryPreferences = dietaryPreferences;
        }),
      setNutritionalGoal: (nutritionalGoal: string) =>
        set((state) => {
          state.nutritionalGoal = nutritionalGoal;
        }),
      setCountry: (country: string) =>
        set((state) => {
          state.country = country;
        }),
      setFoodAlergies: (foodAlergies: string) =>
        set((state) => {
          state.foodAlergies = foodAlergies;
        }),
      setOthers: (others: string) =>
        set((state) => {
          state.others = others;
        }),
    })),
    { name: "userPreferences" },
  ),
);

export const useStep = create<Step>()(
  immer((set) => ({
    step: 1,
    next: () =>
      set((state) => {
        state.step++;
      }),
    prev: () => {
      set((state) => {
        state.step--;
      });
    },
  })),
);
