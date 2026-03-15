export function isRequired(value) {
  return value != null && String(value).trim().length > 0;
}

export function isValidEmail(value) {
  if (!isRequired(value)) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(String(value).toLowerCase());
}

export function isPositiveInteger(value) {
  const num = Number(value);
  return Number.isInteger(num) && num > 0;
}

