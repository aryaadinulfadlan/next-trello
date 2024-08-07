"use client";

import createBoard from "@/actions/create-board";
import { useFormState } from "react-dom";
import FormInput from "./form-input";
import FormButton from "./form-button";

export default function Form() {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createBoard, initialState);

  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors} />
      {/* <div className="flex flex-col space-y-2">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter board title"
          className="border border-input p-1"
        />
        {state?.errors?.title ? (
          <div>
            {state.errors.title.map((err: string) => (
              <p key={err} className="text-rose-500">
                {err}
              </p>
            ))}
          </div>
        ) : null}
      </div> */}
      <FormButton />
    </form>
  );
}
