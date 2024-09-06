import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const NavBar = () => {
  return (
    <nav>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};
