import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "../components/Card";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let array = localStorage.getItem("taskList");
    if (array) {
      let object = JSON.parse(array);
      setTaskList(object);
    }
  }, []);
  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObject) => {
    let tempList = taskList;
    tempList.push(taskObject);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setModal(false);
  };
  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  const updateListArray = (object, index) => {
    let tempList = taskList;
    tempList[index] = object;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  return (
    <>
      <div className="header text-center">
        <h3>TodoList</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div>
        <div className="task-container">
          {taskList.map((object, index) => (
            <Card
              taskObject={object}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
        </div>
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
