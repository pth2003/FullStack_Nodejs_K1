import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";
const EmailForm = () => {
  const { user } = useAuth0();

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_v4284kl",
        "template_dbxg0pk",

        form.current,
        "-Xgc5W63cXz4aBLqB"
      )
      .then(
        (result) => {
          toast.success("Gửi mail thành công!!");
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <form ref={form} className="mt-3" onSubmit={sendEmail}>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="abc@gmail.com"
          name="to_email"
          value={user.email}
          onChange={() => {}}
        />
        <label htmlFor="floatingInput">Email của bạn*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="pth"
          name="to_name"
          value={user.name}
          onChange={() => {}}
        />
        <label htmlFor="floatingInput">Tên của bạn*</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
          name="message"
        ></textarea>
        <label htmlFor="floatingTextarea2">Tin nhắn*</label>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Gửi yêu cầu hỗ trợ
      </button>
      <ToastContainer />
    </form>
  );
};

export default EmailForm;
