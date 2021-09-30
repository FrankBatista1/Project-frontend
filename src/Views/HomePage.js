import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign up</Link>
    </>
  );
};

export default HomePage;
