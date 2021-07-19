//used to convert the json date into date

import LiveData from "./LiveData.json";

export const getData = () => {
  const data = LiveData.map((row) => {
    return {
      ...row,
      createdOn: dateConvert(row.createdOn),
    };
  });
  return data;
};

function dateConvert(num) {
  const date = new Date(parseFloat(num));
  const time = new Date() - date;
  const days = Math.round(time / (24 * 60 * 60 * 1000));
  const newDate =
    date.toLocaleString("default", { month: "short" }) +
    " " +
    date.getFullYear() +
    ", " +
    date.getDate();

  return `${newDate}  ${days} days ago `;
}
