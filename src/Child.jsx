import React, { useContext, useReducer } from "react";
import { StateContext } from "./App";
import GrandChild from "./GrandChild";

const Child = () => {
  // const {count, setCount} = useContext(StateContext);
  const initialState = 0;
  const reducer = (state, action) => {
    if (action.type == "INCREMENT") {
      return state + action.number;
    } else if (action.type == "DECREMENT") {
      return state - action.number;
    } else {
      return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div className="child">
        <h1>Child</h1>
        <h1>{state}</h1>
        <div className="buttons flex justify-between">
          <button onClick={() => dispatch({ type: "DECREMENT", number : 5 })}>
            Decrement
          </button>
          <button onClick={() => dispatch({ type: "INCREMENT", number : 5 })}>
            Increment
          </button>
        </div>
      </div>
      <GrandChild />
    </div>
  );
};

export default Child;
