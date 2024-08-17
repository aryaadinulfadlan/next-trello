import * as zod from "zod";

export const DeleteCard = zod.object({
  id: zod.string(),
  boardId: zod.string(),
});
