import * as zod from "zod";
import { CopyList } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { List } from "@prisma/client";

export type InputType = zod.infer<typeof CopyList>;
export type ReturnType = ActionState<InputType, List>;