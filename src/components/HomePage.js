import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container pt-5">
    <h1 className="text-secondary">Test task for wwwest.solutions</h1>
    <p className="text-muted mb-5">( /homepage )</p>
    <Link to="/news" className="mx-auto d-inline btn btn-primary">
      Go to News
    </Link>
  </div>
);

export default HomePage;
