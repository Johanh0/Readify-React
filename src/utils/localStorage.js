export const setLocalStorage = (storageName, storageContent) => {
  localStorage.setItem(storageName, JSON.stringify(storageContent));
};

export const removeLocalStorage = (storageName) => {
  localStorage.removeItem(storageName);
};
