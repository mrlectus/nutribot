import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useStep, useUserPreferences } from "@/app/store/store";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const CountryForm = () => {
  const [next] = useStep((state) => [state.next]);
  const [input, setInput] = React.useState("");
  const [setCountry] = useUserPreferences((state) => [state.setCountry]);
  const handleSubmit = () => {
    setCountry(input);
  };
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Country</CardTitle>
        <CardDescription className="font-bold text-xl">
          This is to help provide meals specific to your country
        </CardDescription>
      </CardHeader>
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
