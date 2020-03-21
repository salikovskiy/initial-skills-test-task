import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../store/actions";

const Navbar = props => (
  <header className="mb-4">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Hot News
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav  ml-auto">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/profile">
              Profile
            </Link>
            <Link className="nav-item nav-link" to="/news">
              News
            </Link>
            <Link className="nav-item nav-link" to="/login">
              Login
            </Link>
            {props.auth && (
              <button onClick={props.signOut} className="btn btn-primary">
                Sign Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  </header>
);

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
