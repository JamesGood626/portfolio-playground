import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <nav>
      <Link to="/lawyer">Lawyer Page</Link>
      <Link to="/windowcleaning">Window Cleaning Page</Link>
    </nav>
  );
};
