"use client";
import React, { useState, useEffect } from "react";
import { useOnBoarding } from "../store/store";
import { useRouter } from "next/navigation";

export const AuthOnBoard = ({ children }: { children: React.ReactNode }) => {
  const [done] = useOnBoarding((state) => [state.done]);
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const timeout = new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 5000);
    });

    (async () => {
      await timeout;
      console.log(done);
      if (done !== undefined && done !== null) {
        setIsHydrated(true);
      }
      if (isHydrated && !done) {
        router.push("/onboarding");
      }
    })();
  }, [done, router, isHydrated]);

  return <>{children}</>;
};
