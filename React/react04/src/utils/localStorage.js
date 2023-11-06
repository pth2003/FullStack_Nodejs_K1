export const getLocalStorage = (key) => {
  try {
    if (localStorage.getItem(key)) {
      const message = JSON.parse(localStorage.getItem("key"));
      return message;
    } else {
      return [];
    }
  } catch (e) {
    return [];
  }
};

export const setLocalStorage = (key, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(key, value);
};
