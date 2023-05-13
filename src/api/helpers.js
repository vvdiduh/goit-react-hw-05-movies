export const getListData = res => res.data.results.map(({ title, id }) => ({ title, id }));
