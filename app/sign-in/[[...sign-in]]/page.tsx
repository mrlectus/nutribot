import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="w-screen min-h-screen flex items-center justify-center">
      <SignIn />
    </main>
  );
}
