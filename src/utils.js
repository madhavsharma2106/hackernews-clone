import moment from "moment";

export const calculateTimeLapsed = (time) => {
  return moment().diff(time, "hours");
};

export const extractHostNameFromUrl = (url) => {
  // Taken from : https://stackoverflow.com/questions/8498592/extract-hostname-name-from-string
  let hostname;
  if (url.indexOf("//") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }
  hostname = hostname.split(":")[0];
  hostname = hostname.split("?")[0];

  return `(${hostname})`;
};
