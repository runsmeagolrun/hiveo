"use server";

import { db } from "@/lib/db";
import { getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";

export const getDocuments = async (userId: string) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized user" };
  }

  const dbUser = await getUserById(user.id);

  if (!dbUser) {
    return { error: "Unauthorized user" };
  }

  try {
    const userDocuments = await db.document.findMany({
      where: { id: userId },
    });
    return userDocuments;
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
