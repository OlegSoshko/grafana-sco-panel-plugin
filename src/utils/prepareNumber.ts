export const prepareNumber = (value: number, precision: number = 2) => {
  return Number.isInteger(value) ? value.toString() : value.toFixed(precision);
};