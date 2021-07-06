import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState();
  const [list, setList] = useState([]);

  const getTask = (event) => {
    setTask(event.target.value);
  };

  const showTask = () => {
    setList((oldArray) => {
      return [...oldArray, task];
    });
    setTask("");
  };

  const deleteItem = (id) => {
    setList((oldArray) => {
      return list.filter((item, position) => {
        return position !== id;
      });
    });
  };

  return (
    <div className="main-container">
      <div className="card-container">
        <div className="card">
          <h1>ToDo App</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Add a task"
              onChange={getTask}
              value={task}
            />
            <button onClick={showTask}>Add</button>
          </div>
          <ol>
            {list.map((itm, id) => {
              return (
                <div className="todoList">
                  <img
                    src="https://img.icons8.com/flat-round/64/000000/delete-sign.png"
                    onClick={() => {
                      return deleteItem(id);
                    }}
                    alt="img"
                  />
                  <li>{itm}</li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
