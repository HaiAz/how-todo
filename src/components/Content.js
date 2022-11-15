/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useState } from "react";
import PropTypes from "prop-types";

Content.propTypes = {};

function Content(props) {
  return (
    <content>
      <div className="main-content">
        {todoList.map((element) => {
          return (
            <div className="todo-list-item" key={element.id}>
              <img src={!element.check ? btnNotDone : btnDone} width="40px" height="40px" className="check-btn" onClick={() => imageHandler(element.id)} />
              <div className="todo-list">
                <label className="todo">{element.task}</label>
              </div>
              <img src={trashBtn} width="25px" height="25px" className="delete-btn" onClick={() => deleteBtn(element.id)} />
            </div>
          );
        })}
      </div>
    </content>
  );
}

export default Content;
