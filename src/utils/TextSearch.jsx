export const textSearch = (data, query) => {
  let result = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].name === query) {
      result.push(data[i]);
    } else if (data[i].color === query) {
      result.push(data[i]);
    } else if (data[i].type === query) {
      result.push(data[i]);
    } else if (data[i].name.split(" ").length > 1) {
      if (data[i].name.split(" ")[0] === query) {
        result.push(data[i]);
      } else if (data[i].name.split(" ")[1] === query) {
        result.push(data[i]);
      }
    }
  }
  return result;
};
