import * as zod from "zod";
import { CreateCard } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Card } from "@prisma/client";

export type InputType = zod.infer<typeof CreateCard>;
export type ReturnType = ActionState<InputType, Card>;
