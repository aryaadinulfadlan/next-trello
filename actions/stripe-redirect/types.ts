import * as zod from "zod";
import { StripeRedirect } from "./schema";
import { ActionState } from "@/lib/create-safe-action";

export type InputType = zod.infer<typeof StripeRedirect>;
export type ReturnType = ActionState<InputType, string>;
