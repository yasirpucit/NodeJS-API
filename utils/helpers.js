const parseData = (data) => {
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

export { parseData };
