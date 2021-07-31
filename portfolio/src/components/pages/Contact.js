import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      nameError: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  renderConfirmError = (event) => {
    
    if (event.target.value === "") {
      this.setState({
        nameError: true,
      });
    } else {
      this.setState({
        nameError: false,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Contact Me</h1>
        <form onSubmit={this.handleSubmit}>
          <label >
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
              onBlur={this.renderConfirmError}
              style={this.state.nameError ? {borderColor:"red"} : null}
              />
          </label>
          <br />
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              onBlur={this.renderConfirmError}
              style={this.state.nameError ? {borderColor:"red"} : null}
            />
          </label>
          <br />
          <label>
            Send me a message:
            <input
              name="message"
              type="text"
              value={this.state.message}
              onChange={this.handleInputChange}
              onBlur={this.renderConfirmError}
              style={this.state.nameError ? {borderColor:"red"} : null}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
