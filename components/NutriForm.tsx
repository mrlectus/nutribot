import clsx from "clsx";
import { produce } from "immer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight, Check, Plus } from "lucide-react";
import React from "react";
import { useStep, useUserPreferences } from "@/app/store/store";
import { nutriGoals } from "@/app/store";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const NutriForm = () => {
  const [next] = useStep((state) => [state.next]);
  const [option, setOptions] = React.useState(nutriGoals);
  const [input, setInput] = React.useState("");
  const [setNutriGoal] = useUserPreferences((state) => [
    state.setNutritionalGoal,
  ]);
  console.log(input);
  const handleSubmit = () => {
    const together = option
      .filter((opt) => opt.selected)
      .map((opt) => opt.name)
      .join(" ")
      .concat(" ", input);
    setNutriGoal(together);
  };
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Nutritional Goals</CardTitle>
        <CardDescription className="font-bold text-xl">
          Select any from below or input it if none of it is there
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          {option?.map((opt) => {
            return (
              <Button
                key={opt.id}
                className={clsx("bg-[#7C93C3] flex gap-2")}
                onClick={() =>
                  setOptions((prev) =>
                    produce(prev, (draft) => {
                      if (draft) {
                        draft[opt.id - 1].selected =
                          !draft[opt.id - 1].selected;
                      }
                    }),
                  )
                }
              >
                {opt.name}
                {opt.selected ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </Button>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <div className="flex w-full items-center relative mt-7">
          <Input
            type="text"
            className="flex flex-grow h-[126px] w-full"
            onChange={(event) => {
              event.preventDefault();
              setInput(event.target.value);
            }}
          />
          <Button
            onClick={() => {
              handleSubmit();
              next();
            }}
            className="absolute right-1 flex gap-2 h-[64px] hover:bg-[#1E2A5E]/90 bg-[#1E2A5E] rounded-full w-[160px]"
          >
            Next <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
