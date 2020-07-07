import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./index.scss";

const App = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    setState("Hello");
  }, []);
  return <h1>{state}</h1>;
};

render(<App />, document.getElementById("root"));
