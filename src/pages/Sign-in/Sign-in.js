import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/Form-input";
import Button from "../../components/Button";
import axios from "axios";
import "./Sign-in.styles.scss";
import "../../config/axios-conf";


export class SignIn extends React.Component {
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
      .post("users", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        alert(response.response.data.detail);
      });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Sign In Form</h2>
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

          <Button type="submit">SIGN IN</Button>
        </form>
        <h4>Already have an account ?</h4>
        <Link to="/LogIn">
            <Button>LOG IN</Button>
        </Link>
      </div>
    );
  }
}
