/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function App() {
  const btnDone = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png";

  const btnNotDone = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/640px-Circle_%28transparent%29.png";
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "Hôm nay ăn gì?",
      check: false,

    },
    {
      id: 2,
      task: "Ăn gì hôm nay?",
      check: true,
    },
    {
      id: 3,
      task: "I love you 3000!",
      check: false,
    }
  ])

  const [done, setDone] = useState(false);
  return (
    <div className="App">
      <div id="container">
        <header id="header">
          <h1 className="text-todo">todos</h1>
          <input className="add-todo" placeholder="What needs to be done?" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/640px-Circle_%28transparent%29.png" width="40px" height="40px" className="all-done" />
        </header>
        <content id="content">
          <div className="main-content">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/640px-Circle_%28transparent%29.png" width="40px" height="40px" className="check-btn" />
            <div className="todo-list">
              <label className="todo">Helo?</label>
            </div>
            <img src="https://www.freeiconspng.com/uploads/trash-can-icon-18.png" width="25px" height="25px" className="delete-btn" />
          </div>
          <div className="main-content">
            <img src={btnDone} width="40px" height="40px" className="check-btn" />
            <div className="todo-list">
              <label className="todo">How are you?</label>
            </div>
            <img src={btnNotDone} width="25px" height="25px" className="delete-btn" />
          </div>
          <div className="main-content">
            {todoList.map((element) => {
              return (
                <div className="main-content"  key={element.id}>
                  <img src={btnDone} width="40px" height="40px" className="check-btn" />
                  <div className="todo-list">
                    <label className="todo">How are you?</label>
                  </div>
                  <img src={btnNotDone} width="25px" height="25px" className="delete-btn" />
                </div>
              )
            })}
          </div>
          

        </content>
        <footer id="footer">
          <div className="item-left">
            <span className="count">3</span> item-left <span className="list-count"></span>
          </div>
          <div className="btn-todo">
            <div className="list-all action-btn">
              <span>All</span>
            </div>
            <div className="list-todo action-btn">
              <span>Todo</span>
            </div>
            <div className="list-completed action-btn">
              <span>Completed</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
