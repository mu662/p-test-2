import React, { Component } from "react";
import { withRouter, Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { actionSignInUser } from "../redux/actions"

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) return alert('All the form filed are required.');
    this.props.actionSignInUser({ email, password })
  }

  render() {
    const { signInUser, signInUserSucc, signInUserFail } = this.props;
    var error = signInUserFail ? JSON.parse(signInUserFail) : null;
    if (signInUserSucc) return (<Redirect to={'/list'} />)
    return (
      <>
        <div class="container">
          <h2>Sign In</h2>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="password" onChange={this.handleChange} />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          {signInUser && <div class="spinner-border">loading...</div>}

          {signInUserFail ?
            <div class="alert alert-danger">
              <strong>Failed!</strong> {error.message}
            </div>
            : null}
        </div>
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
          <Link to={`/register`}>Sign Up</Link>
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
    actionSignInUser: (body) => dispatch(actionSignInUser(body))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginComponent));

