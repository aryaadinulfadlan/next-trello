import * as zod from "zod";

export const CopyCard = zod.object({
  id: zod.string(),
  boardId: zod.string(),
});
