import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Sign-in-Formik.styles.scss";
import "../../config/axios-conf";
import { Formik } from "formik";
import * as Yup from "yup";

export class SignInFormik extends Component {
  submit = (values) => {
    console.log(values);
    axios
      .post("users", values)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        alert(response.response.data.detail);
      });
  };

  formError = Yup.object().shape({
    email: Yup.string().email("Email non valide"),
  });

  render() {
    return (
      <div>
        <Formik
          onSubmit={this.submit}
          initialValues={{ email: "", password: "" }}
          validationSchema={this.formError}
        >
          {({
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            errors,
          }) => (
            <div className="sign-in">
              <form onSubmit={handleSubmit}>
                <div className="group">
                  <label for="email" className="form-input-label">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  ></input>
                  {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="group">
                  <label for="password" className="form-input-label">
                    password
                  </label>
                  <input
                    name="password"
                    className="form-input"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  ></input>
                </div>
                <button className="custom-button" type="submit">
                  Envoyer
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}
