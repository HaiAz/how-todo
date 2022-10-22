import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {};

function Header(props) {
  return (
    <header>
      <h1>todos</h1>
      <input className="add-todo" placeholder="What needs to be done?" />
    </header>
  );
}

export default Header;
