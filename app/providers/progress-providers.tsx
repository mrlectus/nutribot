"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#1E2A5E"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressProviders;
