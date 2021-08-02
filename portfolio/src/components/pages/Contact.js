import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isBlur, setIsBlur] = useState(false);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const blurHandler = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name" && inputValue === "") {
      setIsBlur(true);
      setErrorMessage("Name field needs to be filled");
    } else if (inputType === "email" && inputValue === "") {
      setIsBlur(true);
      setErrorMessage("Email field needs to be filled");
    } else if (inputType === "message" && inputValue === "") {
      setIsBlur(true);
      setErrorMessage("Message field needs to be filled");
    } else {
      setIsBlur(false);
      setErrorMessage("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div>
      <h2 className="m-3">Contact Me</h2>
      <form className="">
        <div className="form m-3">
          <label className="">Name:</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={blurHandler}
            type="text"
            placeholder="name"
            className="form-control"
          />
        </div>
        <div className="form m-3">
          <label>Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={blurHandler}
            type="email"
            placeholder="email"
            className="form-control"
          />
        </div>
        <div className="form m-3">
          <label>Message:</label>
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={blurHandler}
            type="text"
            placeholder="message"
            className="form-control"
          />
        </div>
        <button type="button" onClick={handleFormSubmit} className="m-3">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div className="mx-3 text-danger">
          <p className="error-text font-weight-bolder">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
