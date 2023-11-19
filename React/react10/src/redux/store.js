import { configureStore } from "@reduxjs/toolkit";
import { couterSlice } from "./slice/counterSlice";
import { todoSlice } from "./slice/todoSlice";
const rootReducer = {
  reducer: { counter: couterSlice.reducer, todo: todoSlice.reducer },
};
export const store = configureStore(rootReducer);
// console.log(store);
// console.log(couterSlice);
