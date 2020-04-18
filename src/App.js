import React from "react";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import "./assets/scss/ui.scss";

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
