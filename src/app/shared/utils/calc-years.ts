export default function calcYears(fromYear: number): number {
  const result = new Date().getFullYear() - fromYear;

  return result < 0 ? result * -1 : result;
}
