import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container pt-5">
    <h1 className="text-secondary mb-5">Test task for wwwest.solutions</h1>
    <Link to="/news" className="mx-auto d-inline btn btn-primary">
      Go to News
    </Link>
  </div>
);

export default HomePage;
