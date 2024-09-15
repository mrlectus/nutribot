"use client";

import { useChat } from "ai/react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useVercelUseChatRuntime } from "@assistant-ui/react-ai-sdk";
import { useUserPreferences } from "../store/store";

export function ChatRutimeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pref = useUserPreferences();
  const payload = {
    dietaryPreferences: pref.dietaryPreferences,
    allergies: pref.foodAlergies,
    nutritionalGoals: pref.nutritionalGoal,
    country: pref.country,
    others: pref.others,
  };
  const chat = useChat({
    api: "/api/chat",
    body: { payload },
  });

  const runtime = useVercelUseChatRuntime(chat);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
