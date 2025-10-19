import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, error, className = "", as = "input", ...props }, ref) {
  const Comp = as;
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-muted-foreground" htmlFor={props.id || props.name}>
          {label}
        </label>
      )}
      <Comp
        ref={ref}
        className={`w-full rounded-md border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
});

export default Input;
