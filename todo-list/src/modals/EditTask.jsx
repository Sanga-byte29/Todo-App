import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, save, taskObject }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(
    (index) => {
      setTaskName(taskObject.Name);
      setDescription(taskObject.Description);
    },
    [taskObject]
  );

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObject = {};
    tempObject["Name"] = taskName;
    tempObject["Description"] = description;
    updateTask(tempObject);
  };
  return (
    <div>
      {/* <Button color="danger" onClick={function noRefCheck() {}}>
        Click Me
      </Button> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group ">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Write Something..."
                value={taskName}
                onChange={handleChange}
                name="taskName"
              />
            </div>
            <div className="form-group">
              <label>Task Description</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Elaborate"
                value={description}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditTask;
