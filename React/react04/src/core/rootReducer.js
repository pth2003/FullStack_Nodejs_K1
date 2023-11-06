import { setLocalStorage, getLocalStorage } from "../utils/localStorage";

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "count/increment": {
      return { ...state, count: state.count + 1 };
    }
    case "count/decrement": {
      return { ...state, count: state.count - 1 };
    }
    case "chat/send": {
      return {
        ...state,
        listMessage: state.listMessage.concat(action.payload),
      };
      //   return state.listMessage.push(state.message);
    }
    case "chat/fetch": {
      return {
        ...state,
        listMessage: state.listMessage.concat(action.payload),
      };
    }
    default:
      return state;
  }
};
