import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="grow"
      role="status"
      style={{
        width: "50px",
        height: "50px",
        margin: "auto",
        display: "block",
      }}
      variant="info"
    >
      <span className="sr-only">טוען...</span>
    </Spinner>
  );
};

export default Loader;
