import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterCustomHook } from "./01-useState/CounterCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormCustomHook } from "./02-useEffect/FormCustomHook";
// import { MultipleCustomHooks } from "./03-example/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import "./06-useReducer/introReducer";
import { TodoApp } from "./06-useReducer/TodoApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
