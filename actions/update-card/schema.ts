import * as zod from "zod";

export const UpdateCard = zod.object({
  boardId: zod.string(),
  description: zod.optional(
    zod
      .string({
        required_error: "Description is required",
        invalid_type_error: "Description is required",
      })
      .min(3, {
        message: "Description is too short",
      })
  ),
  title: zod
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, {
      message: "Title is too short",
    }),
  id: zod.string(),
});
