import React, { useState } from "react";

import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Стартовый набор" },
    { id: 5, value: 0, name: "Ненужные вещи" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (idProduct) => {
    const newCounters = counters.filter((count) => count.id !== idProduct);
    setCounters(newCounters);
  };

  const handleIncrement = (idProduct) => {
    console.log("+", idProduct);
    const newCounters = counters.map((count) => {
      if (count.id === idProduct) {
        count.value += 1;
      }
      return count;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (idProduct) => {
    console.log("-", idProduct);
    const newCounters = counters.map((count) => {
      if (count.id === idProduct && count.value !== 0) {
        count.value -= 1;
      }
      return count;
    });
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, b) => a + b.value, 0)} />
        <Counters
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
