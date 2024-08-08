import * as zod from "zod";

export const CreateBoard = zod.object({
  title: zod
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is invalid",
    })
    .min(3, {
      message: "Title is minimum 3 letters",
    }),
});
