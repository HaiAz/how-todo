/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands, icon } from "@fortawesome/fontawesome-svg-core/import.macro";

const btnDone = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png";

const btnNotDone = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/640px-Circle_%28transparent%29.png";

const trashBtn = "https://www.freeiconspng.com/uploads/trash-can-icon-18.png";

function App() {
  const [id, setID] = useState(0);
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
    },
  ]);
  const [completed, setCompleted] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const checkAllTasks = () => {
    setTodoList((prev) => prev.map((x) => {
      if(!checkAll){
        setCheckAll(true);
        return {...x, check: true};
      } else  {
        setCheckAll(false);
        return {...x, check: false};
      }
    }));
  };

  const todo = () => {
    const newArr = [];
    // setTodoList((prev) => prev.filter((x) => x.check === false
    // ));
    setTodoList((prev) => prev.map((x) => {
      newArr.push({...x, check: false})
    }))
  };
 
  const todoComplete = () => {
    setTodoList((prev) => prev.filter((x) => x.check === true
    ));
  };

  const [task, setTask] = useState([]);

  const todoHandler = () => {
    setTodoList((prev) => [...prev, {
      id: Math.floor(Math.random() * 10000),
      task: task,
      check: false,
    }])
  }

  const imageHandler = (taskID) => {
    setTodoList((prev) => prev.map((x) => (x.id === taskID ? { ...x, check: !x.check } : x)));
  };

  const deleteBtn = (taskID) => {
    setTodoList((prev) => prev.filter((x) => x.id !== taskID));
  };
  return (
    <div className="App">
      <div id="container">
        <header id="header">
        <h1 className="text-todo">todos</h1>
        <input className="add-todo" placeholder="What needs to be done?" value={task} onChange={e => setTask(e.target.value)}/>
        <img src={!checkAll? btnNotDone : btnDone } width="40px" height="40px" className="all-done" onClick={checkAllTasks}/>
        <button onClick={() => todoHandler()}>ADD</button>
        </header>
        <content id="content">
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
        <footer id="footer">
          <div className="item-left">
            <span className="count">3</span> item-left <span className="list-count"></span>
          </div>
          <div className="btn-todo">
            <div className="list-all action-btn">
              <span>All</span>
            </div>
            <div className="list-todo action-btn">
              <span onClick={() => todo()}>Todo</span>
            </div>
            <div className="list-completed action-btn">
              <span onClick={() => todoComplete()}>Completed</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
