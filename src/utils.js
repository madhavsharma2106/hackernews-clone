import moment from "moment";
export function isEmptyObject(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export const calculateTimeLapsed = (time) => {
  let hours = moment().diff(time, "hours");
  if (hours < 24) return `${hours} hours`;
  else {
    const days = Math.floor(hours / 24);
    hours = hours % 24;

    return `${days} ${days > 1 ? "days" : "day"} ${hours} ${
      days > 1 ? "hours" : "hour"
    }`;
  }
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

export const persistToLocalStorage = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data));
};

export const retrieveFromLocalStorage = (name) => {
  const item = window.localStorage.getItem(name);
  return item ? JSON.parse(item) : undefined;
};

export function includeVariants(variantObject) {
  let variantArray = [];
  for (const property in variantObject) {
    variantArray.push(variantObject[property]);
  }
  return variantArray;
}
