"use client";

import Image from "next/image";
import { PlusCircle } from "lucide-react";

import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
  const user = useCurrentUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty-document.png"
        height="300"
        width="300"
        alt="Empty"
        className="dark:hidden"
      />
      <Image
        src="/empty-document-dark.png"
        height="300"
        width="300"
        alt="Empty"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {!!user?.name ? `${user?.name}\`s` : ""} Hiveo
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
