import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Label } from "reactstrap";
import MainLayout from "../mainc/MainLayout";
import { login } from "./../redux/actions/AuthAction";
import { connect } from "react-redux";

export default class LoginRegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setForm: "login"
    };
  }

  toggleForm = form => e => {
    this.setState({ setForm: form });
  };

  render() {
    return (
      <MainLayout>
        <div className="border shadow-sm p-4 m-auto w-50 rounded bg-white">
          <h5 className="text-center">
            {this.state.setForm == "login" ? "Login" : "Register"}
          </h5>
          <div className="p-1">
            {this.state.setForm == "login" ? (
              <>
                <LoginForm />
                <a
                  className="text-center d-block pt-4"
                  onClick={this.toggleForm("register")}
                  href="#"
                >
                  New here ? Start Account
                </a>
              </>
            ) : (
              <>
                <RegisterForm />
                <a
                  className="text-center d-block pt-4"
                  onClick={this.toggleForm("login")}
                  href="#"
                >
                  Already had account ? Login
                </a>
              </>
            )}
          </div>
        </div>
      </MainLayout>
    );
  }
}

class LoginForm extends Component {
  render() {
    return (
      <Formik
        onSubmit={(values, actions) => {
          console.log(values);
          this.props.login(values);
          actions.setSubmitting(false);
        }}
        initialValues={{ username: "", password: "" }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <Label for="username-form">Username</Label>
              <Field
                className="form-control"
                type="username"
                id="username-form"
                name="username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password-form">Password</Label>
              <Field
                className="form-control"
                id="password-form"
                type="password"
                name="password"
              />
            </FormGroup>

            <button
              className="btn w-100 btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  login
};

LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

class RegisterForm extends Component {
  render() {
    return (
      <Formik
        onSubmit={(values, actions) => {
          console.log(values);
          actions.setSubmitting(false);
        }}
        initialValues={{ email: "", username: "", password: "" }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <Label for="email-form">Email</Label>
              <Field
                className="form-control"
                type="email"
                id="email-form"
                name="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="username-form">Username</Label>
              <Field
                className="form-control"
                type="text"
                id="username-form"
                name="username"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password-form">Password</Label>
              <Field
                className="form-control"
                id="password-form"
                type="password"
                name="password"
              />
            </FormGroup>

            <button
              className="btn w-100 btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    );
  }
}
