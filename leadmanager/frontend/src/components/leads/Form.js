import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    this.props.addLead(lead);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <legend>Add Lead</legend>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={this.onChange}
            value={name}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={this.onChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="3"
            className="form-control"
            type="text"
            name="message"
            onChange={this.onChange}
            value={message}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(null, { addLead })(Form);
