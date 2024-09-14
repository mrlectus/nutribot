// import { NavBar } from "@/components/navbar";
import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "500", "900"],
});

export const metadata: Metadata = {
  title: "onboarding",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={kumbh.className} suppressHydrationWarning>
        <header className="p-2">{/* <NavBar /> */}</header>
        {children}
      </body>
    </html>
  );
}
