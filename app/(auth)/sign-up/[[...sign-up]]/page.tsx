import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <main className="w-screen min-h-screen flex items-center justify-center">
      <div className="flex justify-center items-center w-full h-full">
        <div className="flex flex-1 justify-center items-center">
          <SignUp />
        </div>
        <div className="hidden md:flex">
          <Image
            src="/login.png"
            alt="lgin"
            width={450}
            height={200}
            className="h-screen"
          />
        </div>
      </div>
    </main>
  );
}
