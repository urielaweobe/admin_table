import React, { useReducer } from "react";

enum FormField {
  SET_NAME = "SET_NAME",
  ADD_NAME = "ADD_NAME",
}

interface FormAction {
  type: FormField;
  payload: string;
}

interface FormState {
  name: string;
}

const UserForm = () => {
  const [state, dispatch] = useReducer(
    (state: any, action: any) => ({
      ...state,
      ...action,
    }),
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
    </div>
  );
};

const NameList = () => {
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return { ...state, names: [...state.name, action.payload], name: "" };
      }
    },
    { names: [], name: "" }
  );

  return (
    <div>
      <div>
        {state.names.map((name: any, index: any) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button onClick={(e) => dispatch({ type: "ADD_NAME" })}>Add Name</button>
    </div>
  );
};

const Practice = () => {
  return (
    <div>
      <NameList />
    </div>
  );
};

export default Practice;
