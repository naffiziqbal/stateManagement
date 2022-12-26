import React, { useReducer } from "react";

const RobastForm = () => {
  const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
      case "input":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };
  const initialState = {
    name: "",
    email: "",
    password: "",
    gender: "",
    age: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="p-3 rounded-2xl"
        onBlur={(e) =>
          dispatch({
            type: "input",
            payload: {
              name: e.target.name,
              value: e.target.value,
            },
          })
        }
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="p-3 rounded-2xl"
        onBlur={(e) =>
          dispatch({
            type: "input",
            payload: {
              name: e.target.name,
              value: e.target.value,
            },
          })
        }
      />
      <br />
      <br />
      <input
        type="Password"
        placeholder="Pass"
        name="password"
        className="p-3 rounded-2xl"
        onBlur={(e) =>
          dispatch({
            type: "input",
            payload: {
              name: e.target.name,
              value: e.target.value,
            },
          })
        }
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Gender"
        name="gender"
        className="p-3 rounded-2xl"
        onBlur={(e) =>
          dispatch({
            type: "input",
            payload: {
              name: e.target.name,
              value: e.target.value,
            },
          })
        }
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="Age"
        name="age"
        className="p-3 rounded-2xl"
        onBlur={(e) =>
          dispatch({
            type: "input",
            payload: {
              name: e.target.name,
              value: e.target.value,
            },
          })
        }
      />
      <br />
      <br />
      <input
        type="submit"
        className="border p-3 w-24 border-purple-700 rounded-3xl hover:cursor-pointer"
      />
    </form>
  );
};

export default RobastForm;
