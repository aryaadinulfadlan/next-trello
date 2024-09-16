import * as zod from "zod";

export const DeleteList = zod.object({
  id: zod.string(),
  boardId: zod.string(),
});
