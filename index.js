import React from "react";
import { ReactDOM } from "react-dom/client";

const head = <h1>This Is Head JSX</h1>;

const headComp = () => (
    <h2>This head component</h2>
);

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(headComp);