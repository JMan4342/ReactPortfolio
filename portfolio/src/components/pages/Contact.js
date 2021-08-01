import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

// class Contact extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       email: "",
//       message: "",
//       nameError: false
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

// renderConfirmError = (event) => {

// if (event.target.value === "") {
//   this.setState({
//     nameError: true,
//   });
// } else {
//   this.setState({
//     nameError: false,
//   });
// }
// }

//   render() {
//     return (
//       <div>
//         <h2>Contact Me</h2>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             Name:
//             <input
//               name="name"
//               type="text"
//               value={this.state.name}
//               onChange={this.handleInputChange}
//               onBlur={this.renderConfirmError}
//               style={this.state.nameError ? {borderColor:"red"} : null}
//               />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input
//               name="email"
//               type="email"
//               value={this.state.email}
//               onChange={this.handleInputChange}
//               onBlur={this.renderConfirmError}
//               style={this.state.nameError ? {borderColor:"red"} : null}
//             />
//           </label>
//           <br />
//           <label>
//             Send me a message:
//             <input
//               name="message"
//               type="text"
//               value={this.state.message}
//               onChange={this.handleInputChange}
//               onBlur={this.renderConfirmError}
//               style={this.state.nameError ? {borderColor:"red"} : null}
//             />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default Contact;

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isBlur, setIsBlur] = useState(false);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
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
    // const inputType = target.name;
    const inputValue = target.value;

    // Validate entered name
    if (inputValue === "") {
      setIsBlur(true);
      setErrorMessage("Field needs to be filled");
    }
    return;

  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={blurHandler}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={blurHandler}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={blurHandler}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
