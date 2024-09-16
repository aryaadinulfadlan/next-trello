import * as zod from "zod";

export const CopyList = zod.object({
  id: zod.string(),
  boardId: zod.string(),
});
