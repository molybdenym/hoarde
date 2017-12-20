export const numWithSign = (number: number): string => {
  return number >= 0 ? `+${number.toString()}` : number.toString();
};

const helpers = {
  numWithSign,
};
export default helpers;
