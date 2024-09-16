import * as zod from "zod";
import { UpdateCardOrder } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Card } from "@prisma/client";

export type InputType = zod.infer<typeof UpdateCardOrder>;
export type ReturnType = ActionState<InputType, Card[]>;
