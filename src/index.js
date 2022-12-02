import React from "react";
import ReactDOM from "react-dom";
const language = "React";
const element = (
  <div>
    <p>{language} is awesome!</p>
  </div>
);
const rootElement = document.querySelector("#root");
ReactDOM.render(element, rootElement);
