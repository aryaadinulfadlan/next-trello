import * as zod from "zod";
import { CopyCard } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { Card } from "@prisma/client";

export type InputType = zod.infer<typeof CopyCard>;
export type ReturnType = ActionState<InputType, Card>;
