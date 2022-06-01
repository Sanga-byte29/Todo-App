import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, save }) => {
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

  const handleSave = () => {
    let taskObject = {};
    taskObject["Name"] = taskName;
    taskObject["Description"] = description;
    save(taskObject);
  };
  return (
    <div>
      {/* <Button color="danger" onClick={function noRefCheck() {}}>
        Click Me
      </Button> */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>CreateTask</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group ">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Write Something"
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
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask;
