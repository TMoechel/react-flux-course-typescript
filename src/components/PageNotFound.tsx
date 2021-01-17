import React, { FC } from "react";
import { Link } from "react-router-dom";

const PageNotFound: FC = () => {
  return (
    <div>
      <h2> Page Not Found </h2>
      <Link to="/">Back to Home </Link>
    </div>
  );
};

export default PageNotFound;
