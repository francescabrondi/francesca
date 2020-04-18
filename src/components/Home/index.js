import React from "react";

import "./style.scss";

const Home = () => {
  // const scrollBottom = () => {
  //   window.scrollTo(0, document.body.scrollHeight);
  // };
  return (
    <div className="home">
      <div className="texts">
        <p className="hello">Hello I'm</p>
        <p className="name">FRANCESCA BRONDI</p>
      </div>

      {/* <div className="arrow">
        <img src="arrow.png" alt="" onClick={scrollBottom} />
      </div> */}
    </div>
  );
};

export default Home;
