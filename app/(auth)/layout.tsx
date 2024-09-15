import type { Metadata } from "next";
import ProgressProviders from "../providers/progress-providers";

import { Kumbh_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Auth",
  description: "",
};

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "500", "900"],
});
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${kumbh.className}`} suppressHydrationWarning={true}>
        <ProgressProviders>{children}</ProgressProviders>
      </body>
    </html>
  );
}
