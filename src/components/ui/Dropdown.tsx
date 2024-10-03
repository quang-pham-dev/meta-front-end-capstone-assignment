import React from "react";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: DropdownOption[];
  label?: string;
  wrapperClassName?: string;
  labelClassName?: string;
}

const Dropdown = React.forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      options,
      label,
      wrapperClassName = "",
      labelClassName = "",
      className = "",
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`booking-form-field ${wrapperClassName}`}>
        {label && (
          <label
            htmlFor={id}
            className={`booking-form-label ${labelClassName}`}
          >
            {label}
          </label>
        )}
        <select
          id={id}
          className={`booking-form-input ${className}`}
          ref={ref}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

export { Dropdown };
