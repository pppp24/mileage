const parseTimelineData = data => {
  const result = data.map(e => {
    return {
      data: e?.data,
      title: `${e?.date?.month} ${e?.date?.year}`,
    };
  });
  return result;
};

const genRandomId = (min = 1, max = 1000) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {parseTimelineData, genRandomId};
