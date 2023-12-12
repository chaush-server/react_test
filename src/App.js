import React, { useState, useContext } from "react";

export const Context = React.createContext();

function ComponentA() {
  const [context, setContext] = useContext(Context);
  return (
    <div>
      ComponentA:
      <button onClick={() => setContext("New Value")}>
        Change Context Value
      </button>
    </div>

  );
}
function ComponentB() {
  const context = useContext(Context);
  return <div>ComponentB: {context}</div>;
}

export default function App() {
  const context = useState("default context value");
  return (
    <Context.Provider value={context}>
      <ComponentA />
      <ComponentB />
    </Context.Provider>
  );
}