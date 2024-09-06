"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { getAnswer } from "./actions/chat/chat";
import { readStreamableValue } from "ai/rsc";

export const maxDuration = 30;
export default function Home() {
  const [generation, setGeneration] = React.useState("");
  return (
    <main className="flex">
      <Button
        onClick={async () => {
          const { text } = await getAnswer(
            "Generate 10 math on the topic of algebra",
          );
          setGeneration(JSON.stringify(text, null, 2));
          // for await (const stream of readStreamableValue(text)) {
          //   setGeneration((currText) => `${currText}${stream}`);
          // }
        }}
      >
        Gen AI
      </Button>
      <pre>{generation}</pre>
    </main>
  );
}
