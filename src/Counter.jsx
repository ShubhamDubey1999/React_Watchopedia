import { useState } from "react";
const Counter = () => {
  //const [counter, setCounter] = useState(0); // useState returns an array , and that array always has 2 values

  // Another Syntax to make complex objects in state
  const [counterState, setCounterState] = useState(() => {
    return {
      counter: 10,
      title: "Fun",
    };
  });
  function handleIncrement() {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter + 1,
      };
    });
  }
  function handleDecrement() {
    setCounterState((prevState) => {
      return {
        ...prevState,
        counter: prevState.counter - 1,
      };
    });
  }
  return (
    <div className="col-12 col-md-4 offset-md-4 border text-white">
      <span className="h2 pt-4 m-2 text-white-50">Fun Counter</span>
      <br />
      <div className="btn-success m-1 btn" onClick={handleIncrement}>
        +1
      </div>
      <div className="btn-danger m-1 btn" onClick={handleDecrement}>
        -1
      </div>
      <br />
      <span className="h4">
        Counter : &nbsp;
        <span className="text-success">{counterState.counter}</span>
      </span>
    </div>
  );
};
export default Counter;
