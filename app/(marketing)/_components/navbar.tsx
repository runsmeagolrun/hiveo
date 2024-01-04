"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { LogoutButton } from "@/components/auth/logout-button";
import { RegisterButton } from "@/components/auth/register-button";
import { useCurrentUser } from "@/hooks/use-current-user";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const user = useCurrentUser();

  return (
    <div
      className={cn(
        "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {!user && (
          <LoginButton>
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </LoginButton>
        )}
        {!user && (
          <RegisterButton>
            <Button size="sm">Get Hiveo free</Button>
          </RegisterButton>
        )}
        {!!user && <LogoutButton>Sign out</LogoutButton>}

        <div className="mr-4 pr-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
