import * as zod from "zod";

export const DeleteBoard = zod.object({
  id: zod.string(),
});
