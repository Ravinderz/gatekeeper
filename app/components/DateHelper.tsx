const convertDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const convertDateWithTime = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export { convertDate, convertDateWithTime };
