import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { NavBar } from "@/components/navbar";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "500", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={barlow.className} suppressHydrationWarning>
          <header className="p-2">
            <NavBar />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
