"use client";

import { useStep } from "@/app/store/store";
import { AlergyForm } from "@/components/AlergyForm";
import { CountryForm } from "@/components/CountryForm";
import { DietForm } from "@/components/DietForm";
import { NutriForm } from "@/components/NutriForm";
import { OthersForm } from "@/components/OthersForm";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { match } from "ts-pattern";

const OnBoarding = () => {
  const { user } = useUser();
  const [step] = useStep((state) => [state.step]);
  return (
    <main>
      <section className="flex w-full justify-center items-center">
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-bold text-4xl text-[#1E2A5E]">
            Hello {user?.fullName}
          </h2>
          <p className="text-[#333333] text-center font-medium w-[600px]">
            To give you the perfect meals, we will need you to answer a few
            questions and then you are set.
          </p>
          {match(step)
            .with(1, () => <DietForm key={crypto.randomUUID()} />)
            .with(2, () => <NutriForm key={crypto.randomUUID()} />)
            .with(3, () => <AlergyForm key={crypto.randomUUID()} />)
            .with(4, () => <CountryForm key={crypto.randomUUID()} />)
            .with(5, () => <OthersForm key={crypto.randomUUID()} />)
            .otherwise(() => null)}
        </div>
      </section>
    </main>
  );
};
export default OnBoarding;
