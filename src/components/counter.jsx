import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(5);

  const formCount = () => {
    return count === 0 ? 0 : count;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-1 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const handleIncrement = (idProduct) => {
    console.log("+", idProduct);
    setCount(count + 1);
  };

  const handleDecrement = (idProduct) => {
    if (count === 0) return count;
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div className={getBadgeClasses()} style={{ fontSize: "22px" }}>
          {formCount()}
        </div>
        <button
          onClick={() => handleIncrement({ id: 1 })}
          className="btn btn-secondary m-1"
        >
          +
        </button>
        <button
          onClick={() => handleDecrement({ id: 1 })}
          className="btn btn-secondary m-1"
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
