import * as zod from "zod";

export const CreateCard = zod.object({
  title: zod
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is required",
    })
    .min(3, {
      message: "Title is too short",
    }),
  boardId: zod.string(),
  listId: zod.string(),
});
