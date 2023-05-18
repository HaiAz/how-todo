/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import React, { useEffect, useRef, useState, useCallback } from "react";

const btnDone =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png";

const btnNotDone =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/640px-Circle_%28transparent%29.png";

const trashBtn = "https://www.freeiconspng.com/uploads/trash-can-icon-18.png";

function App() {
    const [id, setID] = useState(0);

    // const [todoList, setTodoList] = useState([
    //     {
    //         id: 1,
    //         task: "Hôm nay ăn gì?",
    //         check: false,
    //     },
    //     {
    //         id: 2,
    //         task: "Ăn gì hôm nay?",
    //         check: true,
    //     },
    //     {
    //         id: 3,
    //         task: "I love you 3000!",
    //         check: false,
    //     },
    // ]);

    const [todoList, setTodoList] = useState([]);
    const [listTodo, setListTodo] = useState([]);
    const [listCompleted, setListCompleted] = useState([]);
    const [cases, setCases] = useState("all-todo");
    const [task, setTask] = useState([]);
    const inputRef = useRef();

    const API = "https://62a49575259aba8e10eb42f8.mockapi.io/omuji/todo";

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setTodoList(data));
    }, []);

    const [checkAll, setCheckAll] = useState(false);
    const checkAllTasks = () => {
        setTodoList((prev) =>
            prev.map((x) => {
                if (!checkAll) {
                    setCheckAll(true);
                    return { ...x, check: true };
                } else {
                    setCheckAll(false);
                    return { ...x, check: false };
                }
            })
        );
    };
    const todo = () => {
        setCases("todo");
        setListTodo([...todoList].filter((x) => x.check === false));
    };

    const todoComplete = () => {
        setCases("completed");
        setListCompleted([...todoList].filter((x) => x.check === true));
    };

    const todoHandler = async () => {
        // setTodoList((prev) => [
        //     ...prev,
        //     {
        //         id: Math.floor(Math.random() * 10000),
        //         task: task,
        //         check: false,
        //     },
        // ]);
        const response = await fetch(API, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },

            body: JSON.stringify({
                id: Math.floor(Math.random() * 10000),
                task: task,
                check: false,
            }),
            // body data type must match "Content-Type" header
        });
        inputRef.current.value = "";
        setTask([]);
        return response.json().then((data) => setTodoList((prev) => [...prev, { ...data }]));
    };

    // React.useEffect(() => {
    //   document.addEventListener("keydown", function (e) {
    //     if (e.keyCode === 13 && document.activeElement === inputRef.current) {
    //       todoHandler();
    //     }
    //   });
    // }, [todoHandler]);

    const imageHandler = (taskID) => {
        setTodoList((prev) => prev.map((x) => (x.id === taskID ? { ...x, check: !x.check } : x)));
    };

    const deleteBtn = async (taskID) => {
        await fetch(`${API}/${taskID}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },

            // body: JSON.stringify(data),
            // body data type must match "Content-Type" header
        });
        setTodoList((prev) => prev.filter((x) => x.id !== taskID));
    };
    return (
        <div className="App">
            <div id="container">
                <header id="header">
                    <h1 className="text-todo">todos</h1>
                    <input
                        className="add-todo"
                        placeholder="What needs to be done?"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        ref={inputRef}
                    />
                    <img
                        src={!checkAll ? btnNotDone : btnDone}
                        width="40px"
                        height="40px"
                        className="all-done"
                        onClick={checkAllTasks}
                    />
                    <button className="btnAdd" onClick={() => todoHandler()}>
                        ADD TODO
                    </button>
                </header>
                <div id="content">
                    <div className="main-content">
                        {/* get All */}
                        {cases === "all-todo" &&
                            todoList.map((element) => {
                                return (
                                    <div className="todo-list-item" key={element.id}>
                                        <img
                                            src={!element.check ? btnNotDone : btnDone}
                                            width="40px"
                                            height="40px"
                                            className="check-btn"
                                            onClick={() => imageHandler(element.id)}
                                        />
                                        <div className="todo-list">
                                            <label className="todo">{element.task}</label>
                                        </div>
                                        <img
                                            src={trashBtn}
                                            width="25px"
                                            height="25px"
                                            className="delete-btn"
                                            onClick={() => deleteBtn(element.id)}
                                        />
                                    </div>
                                );
                            })}
                        {/* get todo */}
                        {cases === "todo" &&
                            listTodo.map((element) => {
                                return (
                                    <div className="todo-list-item" key={element.id}>
                                        <img
                                            src={!element.check ? btnNotDone : btnDone}
                                            width="40px"
                                            height="40px"
                                            className="check-btn"
                                            onClick={() => imageHandler(element.id)}
                                        />
                                        <div className="todo-list">
                                            <label className="todo">{element.task}</label>
                                        </div>
                                        <img
                                            src={trashBtn}
                                            width="25px"
                                            height="25px"
                                            className="delete-btn"
                                            onClick={() => deleteBtn(element.id)}
                                        />
                                    </div>
                                );
                            })}
                        {/* get completed */}
                        {cases === "completed" &&
                            listCompleted.map((element) => {
                                return (
                                    <div className="todo-list-item" key={element.id}>
                                        <img
                                            src={!element.check ? btnNotDone : btnDone}
                                            width="40px"
                                            height="40px"
                                            className="check-btn"
                                            onClick={() => imageHandler(element.id)}
                                        />
                                        <div className="todo-list">
                                            <label className="todo">{element.task}</label>
                                        </div>
                                        <img
                                            src={trashBtn}
                                            width="25px"
                                            height="25px"
                                            className="delete-btn"
                                            onClick={() => deleteBtn(element.id)}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <footer id="footer">
                    <div className="item-left">
                        <span className="count">{todoList.length}</span> item-left{" "}
                        <span className="list-count"></span>
                    </div>
                    <div className="btn-todo">
                        <div className="list-all action-btn">
                            <span onClick={() => setCases("all-todo")}>All</span>
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
