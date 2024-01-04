"use client";

import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const user = useCurrentUser();

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your workspace to write, organize, and collaborate. Welcome to {""}
        <span className="underline">Hiveo</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Join a global movement. Unleash your creativity.
      </h3>
      {!!user && (
        <Button asChild>
          <Link href="/documents">
            Enter Hiveo
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
      {!user && (
        <Button asChild>
          <Link href="/register">
            Get Hiveo free
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      )}
    </div>
  );
};
