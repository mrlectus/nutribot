import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { AuthOnBoard } from "../providers/onboarding";

export const metadata: Metadata = {
  title: "dashboard",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-dvh md:h-screen" suppressHydrationWarning>
        <AuthOnBoard>
          <header className="p-2">
            <NavBar />
          </header>
          {children}
        </AuthOnBoard>
      </body>
    </html>
  );
}
