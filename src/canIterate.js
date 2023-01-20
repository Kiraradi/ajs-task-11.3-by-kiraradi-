export default function canIterate(value) {
    debugger
  if (value === null || value === undefined) {
    return false;
  }
  const result = Object.getOwnPropertySymbols(Object.getPrototypeOf(value));
  return result.length > 0 ? Boolean(result[Symbol.iterator]) : false;
}
