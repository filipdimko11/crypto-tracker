import React, { useEffect, useState } from "react";
import { fetchData } from "../endpoints/FetchData";

const Counter = (props) => {
  // create a counter
  const [counter, setCounter] = useState(90);
  // create a function to increment the counter
  const increment = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      increment();
    }, 1000);
    if (counter < 0) {
      props.fetchData();
      setCounter(90);
    }
  });

  return (
    <div className="text-xs text-left pl-4">
      {/* implement the counter */}
      <h1>Refreshing in: {counter} seconds</h1>
    </div>
  );
};

export default Counter;
