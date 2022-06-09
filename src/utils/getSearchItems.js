export const getSearchItems = (data, text) => {
  const allCandidates = data.reduce(
    (acc, curr) => (acc = [...acc, ...curr.candidates]),
    []
  );
  return allCandidates.filter((item) =>
    item.Name.toLowerCase().includes(text.toLowerCase())
  );
};
