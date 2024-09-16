import * as zod from "zod";
import { DeleteBoard } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Board } from "@prisma/client";

export type InputType = zod.infer<typeof DeleteBoard>;
export type ReturnType = ActionState<InputType, Board>;
