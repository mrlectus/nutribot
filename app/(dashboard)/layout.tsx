import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { AuthOnBoard } from "../providers/onboarding";
import ProgressProviders from "../providers/progress-providers";
import { Kumbh_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "dashboard",
  description: "",
};

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "500", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${kumbh.className} h-dvh md:h-screen`}
        suppressHydrationWarning={true}
      >
        <ProgressProviders>
          <AuthOnBoard>
            <header className="p-2">
              <NavBar />
            </header>
            {children}
          </AuthOnBoard>
        </ProgressProviders>
      </body>
    </html>
  );
}
