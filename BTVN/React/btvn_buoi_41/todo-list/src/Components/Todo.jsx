import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ task, toggleComplete, handleDelete, handleEdit }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task._id)}
        className={`${task.isCompleted ? "completed" : ""}`}
      >
        {task.todo}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => {
            handleEdit(task._id);
          }}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => {
            handleDelete(task._id);
          }}
        />
      </div>
    </div>
  );
};
