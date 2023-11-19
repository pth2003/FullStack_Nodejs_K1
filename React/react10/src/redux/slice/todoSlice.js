import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    status: "idle",
  },
  reducers: {
    // trong reducer la cac action creator
  },
  // bất đồng bộ thì đưa vào extraReducers
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.status = "success";
      state.todoList = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.status = "error";
    });
  },
});
// redux thunk
// export const fetchTodos = () => {
//   return async (dispatch) => {
//     const res = await fetch(
//       `https://jsonplaceholder.typicode.com/todos?_limit=10`
//     );
//     const data = await res.json();

//     dispatch(todoSlice.actions.update(data));
//   };
// };
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=10`
  );
  const data = await res.json();
  return data;
});

// creatthunk có 3 trạng thái :
// - pending
// - fullfilled
// - reject
