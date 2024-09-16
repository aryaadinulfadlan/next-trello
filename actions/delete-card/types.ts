import * as zod from "zod";
import { DeleteCard } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Card } from "@prisma/client";

export type InputType = zod.infer<typeof DeleteCard>;
export type ReturnType = ActionState<InputType, Card>;
