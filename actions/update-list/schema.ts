import * as zod from "zod";

export const UpdateList = zod.object({
  title: zod
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, {
      message: "Title is too short",
    }),
  id: zod.string(),
  boardId: zod.string(),
});
