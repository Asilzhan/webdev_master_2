const isoDateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d*)?(?:[-+]\d{2}:?\d{2}|Z)?$/;
const simpleDateFormat = /^\d{4}-\d{2}-\d{2}$/;

function isIsoDateString(value: any): boolean {
  return value && typeof value === "string" && (isoDateFormat.test(value) || simpleDateFormat.test(value));
}

function handleDate(value: any) {
  if (isIsoDateString(value)) return new Date(value);
  return value;
}

export { handleDate };
