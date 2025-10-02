import { cn } from "../../../../lib/helpers";

const Label = ({ children, htmlFor, required = false, className }) => (
  <div className={cn("flex gap-1", className)}>
    <label
      htmlFor={htmlFor}
      className={cn("text-sm font-500 leading-4 text-neutral-800")}
    >
      {children}
    </label>
    {required && (
      <span aria-hidden="true" className={cn("text-xs text-danger-500")}>
        *
      </span>
    )}
  </div>
);

export default Label;
