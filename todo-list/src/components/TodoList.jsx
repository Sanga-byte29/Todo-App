import React from "react";
import { useState } from "react";
import CreateTask from "../modals/CreateTask";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObject) => {
    let tempList = taskList;
    tempList.push(taskObject);
    setTaskList(tempList);
    setModal(false);
  };
  return (
    <>
      <div className="header text-center">
        <h3>TodoList</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((object) => (
          <li>{object.Name}</li>
        ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
