import { Days, Months } from "./types";

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const days: Days[] = [
    Days.Sunday,
    Days.Monday,
    Days.Tuesday,
    Days.Wednesday,
    Days.Thursday,
    Days.Friday,
    Days.Saturday,
  ];
  const months: Months[] = [
    Months.January,
    Months.February,
    Months.March,
    Months.April,
    Months.May,
    Months.June,
    Months.July,
    Months.August,
    Months.September,
    Months.October,
    Months.November,
    Months.December,
  ];

  const dayName = days[date.getDay()];
  const day = date.getDate();
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();

  let ordinal = "th";
  if (day % 10 === 1 && day !== 11) {
    ordinal = "st";
  } else if (day % 10 === 2 && day !== 12) {
    ordinal = "nd";
  } else if (day % 10 === 3 && day !== 13) {
    ordinal = "rd";
  }
  return `${dayName}, ${day}${ordinal} ${monthName}, ${year}`;
}

