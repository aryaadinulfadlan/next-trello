"use client";

import FormInput from "./form-input";
import FormButton from "./form-button";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";

export default function Form() {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess(data) {
      console.log(data, "SUCCESS");
    },
    onError(error) {
      console.log(error, "ERROR");
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <FormInput errors={fieldErrors} />
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
