import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
  btnLabel: { active, pending },
  ...props
}: {
  btnLabel: { active: React.ReactNode; pending?: React.ReactNode };
} & ButtonProps) => {
  const { pending: isPending } = useFormStatus();
  return (
    <Button disabled={isPending} {...props}>
      {isPending
        ? pending || (
            <div className="flex items-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin" /> Please wait
            </div>
          )
        : active}
    </Button>
  );
};

export default SubmitButton;
