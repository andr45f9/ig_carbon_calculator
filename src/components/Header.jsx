import React from "react";

function Header() {
  return (
    <header className="Header">
      <div className="HeaderContainer">
        <h1>The Instagram</h1>
        <hr />
        <h2>Carbon Calculator</h2>
        <div className="HeaderWrapper">
          <div>
            <hr />
            <h2>Of 2022</h2>
          </div>
          <h3>
            <i>
              LET´S SAVE THE <br></br> ENVIROMENT BY <br></br> BEING AWARE
            </i>
          </h3>
        </div>
        <div className="ButtonWrapper">
          <button className="CircleButton Bounce">&#8595;</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
