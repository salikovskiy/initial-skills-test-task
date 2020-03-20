import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Profile = props => {
  console.log(props);
  if (!props.auth) return <Redirect to="/login" />;
  return (
    <div className="container">
      <h1>User profile</h1>
      <p className="text-muted">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
        adipisci perspiciatis reiciendis aliquid dolor veniam corporis.
        Molestiae illo saepe delectus distinctio minus ratione dolorem expedita
        facere rem autem. Voluptatibus, nostrum.
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Profile);
