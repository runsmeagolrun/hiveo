"use client";

import Image from "next/image";
import { PlusCircle } from "lucide-react";
import { toast } from "sonner";

import { useCurrentUser } from "@/hooks/use-current-user";
import { Button } from "@/components/ui/button";
import { newDocument } from "@/actions/new-document";

const DocumentsPage = () => {
  const user = useCurrentUser();

  const dummyData = {
    title: "Untitled",
    userId: "clqz0168300005fy89mpz271l",
    isArchived: false,
    content: "content",
    coverImage: "images/cover",
    icon: "icon-folder",
    isPublished: false,
    parentDocument: [
      {
        title: "new document",
        userId: "clqz0168300005fy89mpz271l",
        isArchived: false,
        content: "content",
        coverImage: "images/cover",
        icon: "icon-folder",
        isPublished: false,
        parentDocument: [],
      },
    ],
  };

  const addDocument = () => {
    const docPromise = newDocument(dummyData);

    toast.promise(docPromise, {
      loading: "Creating new document...",
      success: "New document created!",
      error: "Failed to create a new document.",
    });
  };

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
      <Button onClick={addDocument}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
