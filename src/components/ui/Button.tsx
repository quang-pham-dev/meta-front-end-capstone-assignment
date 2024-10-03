import React from "react";

type ButtonVariant = "default" | "primary" | "secondary" | "outline";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "medium", children, ...props },
    ref
  ) => {
    const classes = [
      "button",
      `button--${variant}`,
      `button--${size}`,
      className
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
