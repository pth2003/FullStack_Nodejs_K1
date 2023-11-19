export const increment = (step) => {
  return { type: "counter/increment", payload: step };
};
export const decrement = (step) => {
  return { type: "counter/decrement", payload: step };
};

export const todoFetch = (data) => {
  return { type: "todo/fetch", payload: data };
};
