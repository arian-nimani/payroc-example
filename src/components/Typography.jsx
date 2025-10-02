import { forwardRef } from "react";
import { getVariantClasses } from "./helpers";
import { cn } from "../lib/helpers";

const Typography = forwardRef((props, ref) => {
  const {
    variant = "span",
    size = "medium",
    parentClassName,
    className,
    children,
    color = "neutral-900",
    textDecoration = "none",
    weight = variant.startsWith("h") ? "medium" : "normal",
    required = false,
    disabled = false,
    ...rest
  } = props;

  const baseClasses = getVariantClasses(variant, size);

  const Component = variant === "display" ? "h1" : variant;

  return (
    <div className={cn("flex cursor-auto items-center gap-2", parentClassName)}>
      <div className="flex items-center">
        <Component
          ref={ref}
          className={cn(
            "flex items-center gap-2",
            baseClasses,
            `font-${weight}`,
            textDecoration,
            disabled ? "cursor-not-allowed text-neutral-400" : `text-${color}`,
            className
          )}
          {...rest}
        >
          {children}
        </Component>
        {required && <span className="text-danger-400">*</span>}
      </div>
    </div>
  );
});

Typography.displayName = "Typography";

export default Typography;
