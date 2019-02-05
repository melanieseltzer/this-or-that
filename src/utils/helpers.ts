export const getResult = (first: string, second: string): string | boolean => {
  const num = Math.random();

  // If there's only one argument we can't make a decision
  if (!first || !second) {
    return false;
  }

  // use the random number to decide which option is chosen
  return num < 0.5 ? first : second;
};
