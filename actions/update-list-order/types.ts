import * as zod from "zod";
import { UpdateListOrder } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { List } from "@prisma/client";

export type InputType = zod.infer<typeof UpdateListOrder>;
export type ReturnType = ActionState<InputType, List[]>;
