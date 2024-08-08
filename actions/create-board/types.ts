import * as zod from "zod";
import { CreateBoard } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Board } from "@prisma/client";

export type InputType = zod.infer<typeof CreateBoard>;
export type ReturnType = ActionState<InputType, Board>;
