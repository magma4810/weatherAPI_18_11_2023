export const saveList = (storageKey, items) => {
  localStorage.setItem(storageKey, JSON.stringify(items));
};
export const readList = async (storageKey) => {
  const data = localStorage.getItem(storageKey);
  return data === null ? [] : JSON.parse(data);
};
