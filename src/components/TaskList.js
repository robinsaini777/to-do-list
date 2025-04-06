import React from "react";
import TaskItem from "./TaskItem";
import {Droppable} from "@hello-pangea/dnd";

const TaskList = ({ tasks, filter, toggleComplete, deleteTask }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <Droppable droppableId="taskList">
      {(provided) => (
        <div className="task-list" {...provided.droppableProps} ref={provided.innerRef}>
          {filteredTasks.length === 0 ? (
            <p className="no-tasks">No tasks available</p>
          ) : (
            filteredTasks.map((task, index) => (
              <TaskItem
                key={task.id}
                index={index}
                task={task}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            ))
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;
