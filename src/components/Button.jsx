import { forwardRef } from "react";
import { classNames } from "../utils/helpers";

const base = "btn-base";
const variants = {
  primary: "btn-primary",
  outline: "btn-outline",
  ghost: "btn-base text-foreground hover:bg-accent",
};
const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4",
  lg: "h-12 px-6 text-lg",
};

const Button = forwardRef(function Button(
  { as: Comp = "button", className, variant = "primary", size = "md", children, ...props },
  ref,
) {
  return (
    <Comp ref={ref} className={classNames(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Comp>
  );
});

export default Button;
