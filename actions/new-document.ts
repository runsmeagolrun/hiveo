"use server";

import * as z from "zod";

import { db } from "@/lib/db";
import { DocumentSchema } from "@/schemas";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const newDocument = async (values: z.infer<typeof DocumentSchema>) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized user" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized user" };
  }

  await db.document.create({
    data: values,
  });

  return { success: "Document created!" };
};
