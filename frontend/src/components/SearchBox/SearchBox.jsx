import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./searchBox.css";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form
      onSubmit={submitHandler}
      className="d-flex search-box align-items-center"
    >
      <button type="submit" className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="חיפוש מוצרים..."
        className="mr-sm-2 ml-sm-5 py-4"
      ></Form.Control>
    </Form>
  );
};

export default SearchBox;
