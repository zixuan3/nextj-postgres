"use client";

import clsx from "clsx";
import { LucideLoader2 } from "lucide-react";
import { cloneElement } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type SubmitButtonProps = {
  label?: string;
  icon?: React.ReactElement;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

const SubmitButton = ({ label, icon, variant, size }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" variant={variant} size={size}>
      {pending && (
        <LucideLoader2
          className={clsx("h-4 w-4 animate-spin", {
            "mr-2": !!label,
          })}
        />
      )}
      {label}
      {pending ? null : icon ? (
        <span
          className={clsx({
            "ml-2": !!label,
          })}
        >
          {cloneElement(icon, {
            className: "h-4 w-4",
          })}
        </span>
      ) : null}
    </Button>
  );
};

export { SubmitButton };
