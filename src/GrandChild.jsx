import React, { useContext } from "react";
import { StateContext } from "./App";

const GrandChild = () => {
  const {count} = useContext(StateContext)
  return (
    <div>
      <div className="grandChild">
        <h1>Grand Child</h1>
        <h1>{count}</h1>
        <div className="buttons"></div>
      </div>
    </div>
  );
};

export default GrandChild;
