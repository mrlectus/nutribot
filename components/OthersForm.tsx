import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useRouter } from "next/navigation";
import React from "react";
import { useOnBoarding, useUserPreferences } from "@/app/store/store";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const OthersForm = () => {
  const [input, setInput] = React.useState("");
  const [setOthers] = useUserPreferences((state) => [state.setOthers]);
  const handleSubmit = () => {
    setOthers(input);
  };
  const [setOnboard] = useOnBoarding((state) => [state.setDone]);
  const router = useRouter();
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Anything Else you want us to know?</CardTitle>
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
              setOnboard();
              router.push("/chat");
            }}
            className="absolute right-1 flex gap-2 h-[64px] hover:bg-[#1E2A5E]/90 bg-[#1E2A5E] rounded-full w-[160px]"
          >
            Done
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
