import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ChefHat, MessageCircle } from "lucide-react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex bg-[#F9F9F9] drop-shadow-md p-1">
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="flex flex-1 justify-center items-center gap-2">
        <div>
          <Link href="/chat" className="flex gap-1">
            <MessageCircle /> Chat
          </Link>
        </div>
        <div>
          <Link href="/meal-plan" className="flex gap-1">
            <ChefHat /> Meal Plan
          </Link>
        </div>
      </div>
    </nav>
  );
};
