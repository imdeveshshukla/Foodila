import React from "react";
import ReactDOM from "react-dom/client";

const head = <h1>This Is Head JSX</h1>;

const NavBar = () =>(
    <nav className="myNav">
    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/0f4e57145499125.Y3JvcCw4NzksNjg4LDIzLDA.jpg" alt="Logo" className="logoImg"/>
    <ul className="navItems">
        <li>Home</li>
        <li>About Us</li>
        <li>Cart</li>
    </ul>
    </nav>
);

const RestCard = () =>(
    <div className="restCard">
    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ocnednlkd4vcs04iznu1" alt="resImg" className="resImg" />
    
    <h3>Masala Street Resturant</h3>
    <p>Rating</p>
    <p>34min</p>  

    </div>
);

const HeadComp = () => {
    return (
        <>
        <h2>Resturants Near You</h2>
        <RestCard/>
        </>
    );
};

const BodyComp = () => (
    <>
    <NavBar/>
    <HeadComp/>
    </>
);
const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<BodyComp/>);