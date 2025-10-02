import cs from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...classes) => {
  return twMerge(cs(classes));
};
