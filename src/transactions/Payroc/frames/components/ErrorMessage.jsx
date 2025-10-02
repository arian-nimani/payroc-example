import React from "react";

import { cn } from "../../../../lib/helpers";

const ErrorMessage = ({ className, children, ...props }) => (
  <div
    {...props}
    role="status"
    aria-live="polite"
    aria-atomic="true"
    className={cn("error-message text-xs text-danger-500", className)}
  >
    {children}
  </div>
);
export default ErrorMessage;
