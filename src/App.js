import React from "react";
import ReactCreateElement from "./components/reactCreateElement";
import ReactComponent from "./components/reactComponent";
import ReactPureComponent from "./components/reactPureComponent";
import FunctionalComponent from "./components/functionalComponent";
import "./App.css";

const TEXT = {
  REACT_CREATE_ELEMENT: "React Create Element",
  REACT_COMPONENT: "React Component",
  REACT_PURE_COMPONENT: "React Pure Component",
  FUNCTIONAL_COMPONENT: "Functional Component",
};

const App = () => {
  return (
    <div className="wrapper">
      <ReactCreateElement text={TEXT.REACT_CREATE_ELEMENT} />
      <ReactComponent text={TEXT.REACT_COMPONENT} />
      <ReactPureComponent text={TEXT.REACT_PURE_COMPONENT} />
      <FunctionalComponent text={TEXT.FUNCTIONAL_COMPONENT} />
    </div>
  );
};

export default App;
