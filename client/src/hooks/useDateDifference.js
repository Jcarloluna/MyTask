import moment from "moment";

export const useDateDifference = (dateCreated) => {
  const dateCreatedDiff = moment().diff(moment(dateCreated));
  const diffInSeconds = Math.floor(
    moment.duration(dateCreatedDiff).asSeconds()
  );
  const diffInMinutes = Math.floor(
    moment.duration(dateCreatedDiff).asMinutes()
  );
  const diffInHours = Math.floor(moment.duration(dateCreatedDiff).asHours());
  const diffInDays = Math.floor(moment.duration(dateCreatedDiff).asDays());
  const convertedDate =
    diffInSeconds < 60
      ? diffInSeconds
          .toString()
          .concat(diffInSeconds > 1 ? " secs ago" : " sec ago")
      : diffInMinutes < 60
      ? diffInMinutes
          .toString()
          .concat(diffInMinutes > 1 ? " mins ago" : " min ago")
      : diffInHours < 24
      ? diffInHours
          .toString()
          .concat(diffInHours > 1 ? " hrs ago" : " hour ago")
      : diffInDays < 30
      ? diffInDays.toString().concat(diffInDays > 1 ? " days ago" : " day ago")
      : moment(dateCreated).format("MMMM Do YYYY");
  return convertedDate;
};
