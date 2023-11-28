import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar"
import HeadComp from "./components/HeadComp"

const head = <h1>This Is Head JSX</h1>;



const BodyComp = () => (
    <>
    <NavBar/>
    <HeadComp/>
    </>
);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<BodyComp/>);



