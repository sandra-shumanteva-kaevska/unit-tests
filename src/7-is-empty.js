export const isEmpty = (stringArrayOrObject) => {
  if (
    Array.isArray(stringArrayOrObject) ||
    typeof stringArrayOrObject === "string"
  ) {
    if (stringArrayOrObject.length === 0) {
      return true;
    } else if (stringArrayOrObject.length > 0) {
      return false;
    }
  } else {
    if (Object.keys(stringArrayOrObject).length === 0) {
      return true;
    } else if (Object.keys(stringArrayOrObject).length > 0) {
      return false;
    }
  }
};
