import React, { useContext, useReducer } from "react";
import { StateContext } from "./App";
import Child from "./Child";
import RobastForm from "./RobastForm";

const Parent = () => {
  // const { count } = useContext(StateContext);


  return (
    <>
      {/* <div className="parent">
        <h1>Parent</h1>
        <h1>{count}</h1>
        <div className="buttons"></div>
      </div>
      <Child /> */}
      <RobastForm />
    </>
  );
};

export default Parent;
