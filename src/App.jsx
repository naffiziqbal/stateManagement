import { createContext, useState } from "react";
import "./App.css";
import Parent from "./Parent";

export const StateContext = createContext();
function App() {
  const [count, setCount] = useState(0);

  // const name = "nafiz";

  const value = { count, setCount };
  return (
    <StateContext.Provider value={value}>
      <Parent />
    </StateContext.Provider>
    // <div className="App">
    //   <div className="">
    //
    //   </div>
    // </div>
  );
}

export default App;
