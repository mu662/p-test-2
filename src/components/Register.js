import React, { Component } from "react";
import { Formik, Form } from 'formik';
import { withRouter, Link } from "react-router-dom"
import { connect } from "react-redux"
import { actionRegisterUser } from "../redux/actions"

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (values) => {
    console.log('values ----', values)
    this.props.actionRegisterUser(values);
  }

  render() {
    const { registerUser, registerUserSucc, registerUserFail } = this.props;
    var error = registerUserFail ? JSON.parse(registerUserFail) : null;
    console.log('registerUser ----', error)
    let the = this;

    return (
      <>
        <div class="container">
          <h2>Register form</h2>
          <Formik
            initialValues={{ name: '', email: '', number: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Email is Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }

              if (!values.name) errors.name = 'Name is Required';
              if (!values.number) errors.number = 'Number is Required';
              if (!values.password) errors.password = 'Password is Required';

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                the.handleSubmit(values)
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched
            }) => (
              <Form>
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name ? <p>{errors.name}</p> : null}
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </div>
                <div class="form-group">
                  <label for="number">Number:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.number}
                  />
                  {errors.number && touched.number ? <p>{errors.number}</p> : null}
                </div>
                <div class="form-group">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password ? <p>{errors.password}</p> : null}
                </div>

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>

          {registerUser && <div class="spinner-border">Submiting...</div>}
          {registerUserSucc ?
            <div class="alert alert-success">
              <strong>Success!</strong> {registerUserSucc.message}
            </div>
            : null}
          {registerUserFail ?
            <div class="alert alert-danger">
              <strong>Failed!</strong> {error.message}
            </div>
            : null}

        </div>
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          <Link to={`/login`}>Sign In</Link>
        </p>
      </>
    )
  }

}
const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actionRegisterUser: (body) => dispatch(actionRegisterUser(body))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterComponent));
