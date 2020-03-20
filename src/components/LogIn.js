import React, { Component } from "react";
import { connect } from "react-redux";
import { logIn } from "../store/actions";
import { Redirect } from "react-router-dom";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.logIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth) return <Redirect to="/profile" />;

    return (
      <div className="auth-container">
        <form onSubmit={this.handleSubmit} className="white">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button type="submit" className="btn btn-primary mb-5">
              Login
            </button>
            {authError ? <p className="text-danger">{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.authError,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: creds => dispatch(logIn(creds))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
