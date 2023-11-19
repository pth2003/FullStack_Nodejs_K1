// kho chứa state
import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import { counterReducer } from "./reducer/counterReducer";
import { todoReducer } from "./reducer/todoReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// rootReducer = counterReducer todoReducer ...
// noi cac reducer boi compineReducers

// action create
