import React from "react";
import ReactDOM from "react-dom/client";

const head = <h1>This Is Head JSX</h1>;

const HeadComp = () => {
    return (
        <>
        {head}
        <h1>I am in head Component</h1>
        </>
    );
};
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<HeadComp/>);