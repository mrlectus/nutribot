"use client";

import {
  generateBreakfast,
  generateDinner,
  generateLunch,
} from "@/app/actions/meal/action";
import {
  breakfastMealSchema,
  dinnerMealSchema,
  lunchMealSchema,
} from "@/app/schema";
import { useUserPreferences } from "@/app/store/store";
import { MealCard } from "@/components/MealCard";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import React from "react";
import { match } from "ts-pattern";

const currentDate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
}).format(new Date());

const MealPlan = () => {
  const [breakfast, setBreakFast] = React.useState<string>("");
  const [lunch, setLunch] = React.useState<string>("");
  const [dinner, setDinner] = React.useState<string>("");
  const [breakfastLoading, setBreakFastLoading] = React.useState(false);
  const [lunchLoading, setLunchLoading] = React.useState(false);
  const [dinnerLoading, setDinnerLoading] = React.useState(false);
  const [active, setActive] = React.useState<number>(0);
  const pref = useUserPreferences();
  const payload = {
    dietaryPreferences: pref.dietaryPreferences,
    allergies: pref.foodAlergies,
    nutritionalGoals: pref.nutritionalGoal,
    country: pref.country,
    others: pref.others,
  };

  return (
    <main className="p-2">
      <div>
        <p className="text-[#1E2A5E] font-bold text-3xl">{currentDate}</p>
      </div>
      <div className="flex gap-5 mt-10">
        <div className="flex flex-col gap-14">
          <Button
            className={clsx(
              "w-[15rem] h-[3rem] rounded-xl font-medium bg-[#F9F9F9] text-xl text-black hover:bg-[#F9F9F9]",
              {
                "bg-[#1E2A5E] hover:bg-[#1E2A5E]/80 text-white": active === 1,
              },
            )}
            onClick={async () => {
              setBreakFastLoading(true);
              setActive(1);
              const { text } = await generateBreakfast(
                "Generate breakfast!",
                payload,
              );
              setBreakFast(JSON.stringify(text, null, 2));
              setBreakFastLoading(false);
            }}
          >
            Breakfast
          </Button>
          <Button
            className={clsx(
              "w-[15rem] h-[3rem] rounded-xl font-medium bg-[#F9F9F9] text-xl text-black hover:bg-[#F9F9F9]",
              {
                "bg-[#1E2A5E] hover:bg-[#1E2A5E]/80 text-white": active === 2,
              },
            )}
            onClick={async () => {
              setLunchLoading(true);
              setActive(2);
              const { text } = await generateLunch("Generate lunch!", payload);
              setLunch(JSON.stringify(text, null, 2));
              setLunchLoading(false);
            }}
          >
            Launch
          </Button>
          <Button
            className={clsx(
              "w-[15rem] h-[3rem] rounded-xl font-medium bg-[#F9F9F9] text-xl text-black hover:bg-[#F9F9F9]",
              {
                "bg-[#1E2A5E] hover:bg-[#1E2A5E]/80 text-white": active === 3,
              },
            )}
            onClick={async () => {
              setDinnerLoading(true);
              setActive(3);
              const { text } = await generateDinner(
                "Generate dinner!",
                payload,
              );
              setDinner(JSON.stringify(text, null, 2));
              setDinnerLoading(false);
            }}
          >
            Dinner
          </Button>
        </div>
        <div>
          <div>
            {match(active)
              .with(1, () =>
                match(breakfastLoading)
                  .with(true, () => (
                    <p key={crypto.randomUUID()}>
                      Wait while we find the perfect breakfast...
                    </p>
                  ))
                  .with(false, () => (
                    <div
                      key={crypto.randomUUID()}
                      className="flex flex-col gap-5 md:grid md:grid-cols-2"
                    >
                      {breakfast &&
                        breakfastMealSchema
                          .parse(JSON.parse(breakfast))
                          .breakfast?.map((meal) => {
                            return (
                              <MealCard key={crypto.randomUUID()} meal={meal} />
                            );
                          })}
                    </div>
                  ))
                  .exhaustive(),
              )
              .with(2, () =>
                match(lunchLoading)
                  .with(true, () => (
                    <p key={crypto.randomUUID()}>
                      Wait while we find the perfect Launch...
                    </p>
                  ))
                  .with(false, () => (
                    <div
                      key={crypto.randomUUID()}
                      className="flex flex-col gap-5 md:grid md:grid-cols-2"
                    >
                      {lunch &&
                        lunchMealSchema
                          .parse(JSON.parse(lunch))
                          .lunch?.map((meal) => {
                            return (
                              <MealCard key={crypto.randomUUID()} meal={meal} />
                            );
                          })}
                    </div>
                  ))
                  .exhaustive(),
              )
              .with(3, () =>
                match(dinnerLoading)
                  .with(true, () => (
                    <p key={crypto.randomUUID()}>
                      Wait while we find the perfect Dinner...
                    </p>
                  ))
                  .with(false, () => (
                    <div
                      key={crypto.randomUUID()}
                      className="flex flex-col gap-5 md:grid md:grid-cols-2"
                    >
                      {dinner &&
                        dinnerMealSchema
                          .parse(JSON.parse(dinner))
                          .dinner?.map((meal) => {
                            return (
                              <MealCard key={crypto.randomUUID()} meal={meal} />
                            );
                          })}
                    </div>
                  ))
                  .exhaustive(),
              )
              .otherwise(() => null)}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MealPlan;
