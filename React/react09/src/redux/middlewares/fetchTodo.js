import { todoFetch } from "../actions/todoActions";

// Thunk middleware --> Function tra ve 1 func khac
export const fetchTodo = () => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=10`
    );
    const data = await res.json();
    dispatch(todoFetch(data));
  };
};
