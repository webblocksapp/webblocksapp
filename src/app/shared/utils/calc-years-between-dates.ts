export default function calcYearsBetweenDates(
  date1: Date,
  date2: Date
): number {
  const result = +(
    ((date2 as any) - (date1 as any)) /
    (1000 * 60 * 60 * 24 * 365)
  ).toFixed(0);

  return result < 0 ? result * -1 : result;
}
