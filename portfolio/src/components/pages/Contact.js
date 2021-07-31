import React from "react";

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(submit) {
    const target = submit.target;
    const value = target.type;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

function Contact(props) {
  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Send me a message:
          <input
            name="message"
            type="text"
            value={this.state.message}
            onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Contact;
