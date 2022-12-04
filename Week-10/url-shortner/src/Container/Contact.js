import "../styles/Contact.css";
import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      email: ""
    };
  }

  handleContactUs = () => {
    alert(
      `Thank you for Registering ${this.state.name}. Our Team will contact you soon on: ${this.state.email}`
    );
    this.setState({
      name: "",
      email: ""
    });
  };

  render() {
    return (
      <div className="form-main">
        <div className="input-group">
          <input
            type="text"
            placeholder="Name..."
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            required
          />
          <input
            type="email"
            placeholder="123@example.com"
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
            required
          />

          <button className="button-primary" onClick={this.handleContactUs}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;
