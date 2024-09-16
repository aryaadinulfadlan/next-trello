import * as zod from "zod";

export const UpdateListOrder = zod.object({
  items: zod.array(
    zod.object({
      id: zod.string(),
      title: zod.string(),
      order: zod.number(),
      // no boardId ??
      // boardId: zod.string(),
      createdAt: zod.date(),
      updatedAt: zod.date(),
    })
  ),
  boardId: zod.string(),
});
