export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getCurrentTimeInIndia(): Date {
  const now = new Date();
  const indiaTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );
  return indiaTime;
}

export function formatTimeForIndia(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  let formattedTime = new Intl.DateTimeFormat("en-IN", options).format(date);
  formattedTime += " IST";
  return formattedTime;
}
