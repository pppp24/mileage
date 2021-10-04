const parseTimelineData = data => {
  console.log({data});

  const result = data.map(e => {
    return {
      data: e?.data,
      title: `${e?.date?.month} ${e?.date?.year}`,
    };
  });
  return result;
};

export {parseTimelineData};
