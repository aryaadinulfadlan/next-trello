import * as zod from "zod";
import { UpdateBoard } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Board } from "@prisma/client";

export type InputType = zod.infer<typeof UpdateBoard>;
export type ReturnType = ActionState<InputType, Board>;
