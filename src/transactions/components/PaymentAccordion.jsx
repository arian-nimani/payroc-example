import { useId, useMemo, useRef, useState } from "react";
import { cn } from "../../lib/helpers";
import Typography from "../../components/Typography";

const PaymentAccordion = ({
  title,
  caption,
  children,
  defaultOpen = false,
  isOpen: controlledOpen,
  onToggle,
  className,
  disableOpen = false,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isControlled = typeof controlledOpen === "boolean";
  const isOpen = useMemo(
    () => (isControlled ? controlledOpen : internalOpen),
    [controlledOpen, isControlled, internalOpen]
  );

  const contentRef = useRef(null);
  const contentId = useId();

  const handleToggle = () => {
    onToggle?.(!isOpen);
    if (!isControlled) setInternalOpen((prev) => !prev);
  };

  const shouldSetHeight = isOpen && !disableOpen;

  return (
    <div
      className={cn(
        "h-fit rounded-lg border border-solid transition-all duration-200",
        isOpen
          ? "border-primary-300 bg-white shadow-card-selected ring-2 ring-primary-200"
          : "overflow-hidden border-neutral-200 bg-neutral-50",
        className
      )}
    >
      <button
        type="button"
        onClick={handleToggle}
        className={cn(
          "flex w-full items-center justify-between gap-3 rounded-lg px-2 py-4 text-left",
          isOpen ? "bg-white" : "bg-neutral-50"
        )}
        aria-expanded={isOpen && !disableOpen}
        aria-controls={contentId}
      >
        <div className="flex items-center gap-2">
          <Typography
            color="neutral-800"
            weight="semibold"
            className="leading-5"
          >
            {title}
          </Typography>
        </div>

        {caption && (
          <Typography
            size="small"
            color="neutral-600"
            weight="medium"
            className="leading-4"
          >
            {caption}
          </Typography>
        )}
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: shouldSetHeight ? contentRef.current?.scrollHeight : 0,
          minHeight: shouldSetHeight ? "fit-content" : 0,
        }}
        id={contentId}
        role="region"
        aria-label={typeof title === "string" ? title : "Section"}
        className="overflow-hidden px-3 transition-all duration-300"
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
};

export default PaymentAccordion;
