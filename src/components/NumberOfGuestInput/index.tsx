import React from "react";
import { Input, InputProps } from "@/components/ui/Input";

interface NumberOfGuestsInputProps
  extends Omit<InputProps, "type" | "min" | "max"> {
  label?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

const NumberOfGuestsInput = React.forwardRef<
  HTMLInputElement,
  NumberOfGuestsInputProps
>(
  (
    {
      label = "Number of guests:",
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
          type="number"
          min={1}
          max={10}
          className={`booking-form-input ${className}`}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

NumberOfGuestsInput.displayName = "NumberOfGuestsInput";

export { NumberOfGuestsInput };
