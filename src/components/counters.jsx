import React from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <>
      <h1>Идем в поход</h1>
      <button onClick={onReset} className="btn btn-primary m-1">
        Обнулить счетчики
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          // onDelete={props.onDelete}
          // onIncrement={props.onIncrement}
          // onDecrement={props.onDecrement}
          {...counter}
          // а можно так counter={counter}
          {...rest}
        />
      ))}
    </>
  );
};

export default Counters;
