const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatDateNumber = (day: number) => {
  const digits = String(day).split("");
  const lastDigit = digits[digits.length - 1];

  if (lastDigit === "1") return `${day}st`;
  else if (lastDigit === "2") return `${day}nd`;
  else if (lastDigit === "3") return `${day}rd`;
  else return `${day}th`;
};

const formatDate = (date_str: string) => {
  const date = new Date(date_str);

  const month = months[date.getMonth()];
  const day = formatDateNumber(date.getDate());
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

export default formatDate;
