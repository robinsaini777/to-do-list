import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    addTask({
      id: Date.now(),
      text: taskText,
      completed: false,
    });

    setTaskText("");
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TaskInput;
