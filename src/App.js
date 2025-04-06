import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import DarkModeToggle from "./components/DarkModeToggle";
import { DragDropContext } from "@hello-pangea/dnd";


import { loadTasks, saveTasks } from "./utils/localStorage";
import "./styles/global.css";


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTasks = [...tasks];
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(reorderedTasks);
  };

  return (
    <div className="app-container">
      <DarkModeToggle />
      <h1>📝 To-Do List</h1>
      <TaskInput addTask={addTask} />
      <Filters setFilter={setFilter} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <TaskList
          tasks={tasks}
          filter={filter}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </DragDropContext>
    </div>
  );
};

export default App;
