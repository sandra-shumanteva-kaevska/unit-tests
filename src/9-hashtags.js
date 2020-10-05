export const hashtags = (text) => {
  return text.split(" ").filter((item) => {
    if (item[0] === "#") {
      return item;
    }
  });
};
