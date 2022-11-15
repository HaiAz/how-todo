/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Content from 'Content.js'
import PropTypes from 'prop-types';

Header.propTypes = {
  
};

function Header(props) {
  return (
    <header>
      <h1 className="text-todo">todos</h1>
        <input className="add-todo" placeholder="What needs to be done?" />
        {
          todoList.map((element)=> {
            return (
              <img src={!checkAll? btnDone : btnNotDone } width="40px" height="40px" className="all-done" onClick={() => {
               getAllTasks(element.id);
              }}/>
            )
          })
        }
    </header>
  );
}

export default Header;