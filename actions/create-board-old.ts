"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as zod from "zod";

export type State = {
  errors?: {
    title?: Array<string>;
  };
  message?: string | null;
};
const CreateBoard = zod.object({
  title: zod.string().min(3, {
    message: "Minimum length of 3 letters",
  }),
});

export default async function createBoardOld(
  prevState: State,
  formData: FormData
) {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields.",
    };
  }
  const { title } = validatedFields.data;

  // TO HANDLE ERROR CASE
  try {
    await db.board.create({
      data: { title },
    });
  } catch (error) {
    return {
      message: "Database Error!",
    };
  }
  revalidatePath("/organization/org_2kDk4ooUigootprYnhMEwHWLzu3");
  redirect("/organization/org_2kDk4ooUigootprYnhMEwHWLzu3");
}
