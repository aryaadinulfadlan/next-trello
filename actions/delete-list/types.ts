import * as zod from "zod";
import { DeleteList } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { List } from "@prisma/client";

export type InputType = zod.infer<typeof DeleteList>;
export type ReturnType = ActionState<InputType, List>;
