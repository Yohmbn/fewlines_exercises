import moment from "moment";

function formatDate(date) {
  console.log(date);
  let a = moment(date, "YYYY-MM-DD").format("dddd Do MMMM YYYY");
  return a;
}
export { formatDate };

function yearsSinceDate(date) {
  console.log(date);
  let b = moment(date, "YYYY-MM-DD").fromNow();
  b = b.replace(" years ago", "");
  let newb = Number.parseInt(b);
  return newb;
}
export { yearsSinceDate };

function daysSinceDate(date) {
  console.log(date);
  let m = moment(date); // or whatever start date you have
  let today = moment().startOf("day");

  let days = Math.ceil(moment.duration(today - m).asDays()) + 1;
  return days;
}
export { daysSinceDate };

function getDayFromDate(date) {
  console.log(date);
  let d = moment(date).format("dddd");
  return d;
}
export { getDayFromDate };
