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

const formatDate = (date_str: string) => {
  const date = new Date(date_str);

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return ``;
};
