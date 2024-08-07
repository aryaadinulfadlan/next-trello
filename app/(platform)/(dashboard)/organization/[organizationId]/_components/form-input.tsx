import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

interface Props {
  errors?: {
    title?: Array<string>;
  };
}
export default function FormInput({ errors }: Props) {
  const { pending } = useFormStatus();
  return (
    <div className="flex flex-col space-y-2">
      <Input
        id="title"
        name="title"
        placeholder="Enter a board title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((err: string) => (
            <p key={err} className="text-rose-500">
              {err}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
}
