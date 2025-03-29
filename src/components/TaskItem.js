import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaTrash, FaCheck } from "react-icons/fa";

const TaskItem = ({ task, index, toggleComplete, deleteTask }) => {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          className={`task-item ${task.completed ? "completed" : ""}`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <span className="task-text">{task.text}</span>
          <div className="task-actions">
            <button className="complete-btn" onClick={() => toggleComplete(task.id)}>
              <FaCheck />
            </button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
