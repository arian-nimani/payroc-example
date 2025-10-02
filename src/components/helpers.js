import { typographyVariants } from "./variants";

export const getVariantClasses = (variant, size) => {
  const variantStyle = typographyVariants[variant];
  if (typeof variantStyle === "object") {
    return variantStyle[size];
  }
  return variantStyle;
};
