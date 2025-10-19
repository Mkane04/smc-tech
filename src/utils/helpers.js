export function classNames(...args) {
  return args
    .flatMap((a) => (typeof a === "string" ? a : typeof a === "object" && a ? Object.keys(a).filter((k) => a[k]) : []))
    .join(" ");
}

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
