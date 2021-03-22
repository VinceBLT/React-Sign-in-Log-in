import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import FormInput from "../../components/Form-input";
import Button from "../../components/Button";
import axios from "axios";
import jwt_decode from "jwt-decode";
import "./Log-in.styles.scss";
import "../../config/axios-conf";

export class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
    axios
      .post("login", this.state)
      .then((response) => {
        let token = response.data.token;
        let decoded = jwt_decode(token);
        console.log(decoded);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Log In Form</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="email"
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="password"
          />
          <Button type="submit">LOG IN</Button>
        </form>
      </div>
    );
  }
}
