import React from "react";

const Filters = ({ setFilter }) => {
  return (
    <div className="filters">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("pending")}>Pending</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default Filters;
