import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import { setLocalStorage, getLocalStorage } from "../utils/localStorage";
import { useSelector } from "../core/useSelector";
function Chat() {
  const { state, dispatch } = useSelector();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.message.value.trim().length) {
      alert("Hay nhap tin nhan");
    } else {
      const messageObj = {
        id: uuid(),
        message: e.target.message.value,
      };

      dispatch({
        type: "chat/send",
        payload: messageObj,
      });
    }

    e.target.message.value = "";
  };
  //   useEffect(() => {
  //     dispatch({
  //       type: "chat/fetch",
  //       payload: getLocalStorage("listMessage"),
  //     });
  //     console.log(state.listMessage);
  //   }, []);
  useEffect(() => {
    setLocalStorage("listMessage", state.listMessage);
  }, [state.listMessage]);
  //   console.log(state.listMessage);
  //   const listMessage =
  //     state.listMessage.length !== 0
  //       ? localStorage.setItem("listMessage", state.listMessage)
  //       : localStorage.setItem("listMessage", []);
  //   console.log(listMessage);
  //   useEffect(() => {
  //     if (state.listMessage.length !== 0) {
  //       localStorage.setItem("state.listMessage", );
  //     } else {
  //       localStorage.setItem("listMessage");
  //     }
  //   }, [state.listMessage]);

  return (
    <div className="container">
      <div className=" chat my-3 p-3" style={{ border: "3px solid red" }}>
        <div className="message">
          {state.listMessage.map((mess) => {
            return (
              <div key={mess.id} className="mb-2">
                {mess.message}
              </div>
            );
          })}
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="message"
              className="form-control"
              placeholder="Tin nhan..."
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Chat;
