import React from "react";

// ({ counter, onDecrement, onDelete }) а можно и так, и ко всем значениям id, value, name подставить counter.
const Counter = ({ id, value, name, onIncrement, onDecrement, onDelete }) => {
  const formCount = () => {
    return value === 0 ? 0 : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-1 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div className={getBadgeClasses()} style={{ fontSize: "22px" }}>
          {formCount(value)}
        </div>
        <button
          onClick={() => onIncrement(id)}
          className="btn btn-secondary m-1"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(id)}
          className="btn btn-secondary m-1"
        >
          -
        </button>
        <button onClick={() => onDelete(id)} className="btn btn-danger m-1">
          Удалить
        </button>
        <div style={{ fontSize: "20px", paddingLeft: "20px" }}>{name}</div>
      </div>
    </>
  );
};

export default Counter;
