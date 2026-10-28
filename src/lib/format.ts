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

const fullDate = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

/** "2026-10-27" -> "October 27, 2026" */
export function formatDate(value: string): string {
  return fullDate.format(new Date(`${value}T00:00:00Z`));
}
