import * as zod from "zod";

export const UpdateCardOrder = zod.object({
  items: zod.array(
    zod.object({
      id: zod.string(),
      title: zod.string(),
      order: zod.number(),
      listId: zod.string(),
      createdAt: zod.date(),
      updatedAt: zod.date(),
    })
  ),
  boardId: zod.string(),
});
