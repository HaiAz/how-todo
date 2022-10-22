// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

<div className="main-content">
  {todoList.map((element) => {
    return (
      <div className="main-content" key={element.id}>
        <img src={element.check ? btnDone : btnNotDone} width="40px" height="40px" className="check-btn" />
        <div className="todo-list">
          <label className="todo">Helo?</label>
        </div>
        <img src="https://www.freeiconspng.com/uploads/trash-can-icon-18.png" width="25px" height="25px" className="delete-btn" />
      </div>
    );
  })}
  {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Circle_%28transparent%29.png/640px-Circle_%28transparent%29.png" width="40px" height="40px" className="check-btn" />
            <div className="todo-list">
              <label className="todo">Helo?</label>
            </div>
            <img src="https://www.freeiconspng.com/uploads/trash-can-icon-18.png" width="25px" height="25px" className="delete-btn" /> */}
</div>;
