const monthYear = new Intl.DateTimeFormat("en-CA", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "2024-09" -> "Sep 2024" */
export function formatMonth(value: string): string {
  return monthYear.format(new Date(`${value}-01T00:00:00Z`));
}

/** ("2024-09") -> "Sep 2024 – Present"; ("2021-01", "2022-11") -> "Jan 2021 – Nov 2022" */
export function formatRange(start: string, end?: string): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
}
