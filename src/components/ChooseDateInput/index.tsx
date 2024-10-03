import React from "react";
import { Input, InputProps } from "@/components/ui/Input";

interface ChooseDateInputProps extends Omit<InputProps, "type"> {
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

const ChooseDateInput = React.forwardRef<
  HTMLInputElement,
  ChooseDateInputProps
>(
  (
    {
      label = "Choose Date:",
      labelClassName = "",
      wrapperClassName = "",
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className={`booking-form-field ${wrapperClassName}`}>
        {label && (
          <label
            htmlFor={props.id}
            className={`booking-form-label ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <Input
          type="date"
          className={`booking-form-input ${className}`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

ChooseDateInput.displayName = "ChooseDateInput";

export { ChooseDateInput };
