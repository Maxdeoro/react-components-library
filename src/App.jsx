import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [showInstructions, setShowInstructions] = useState(false);

  function toggleInstructions() {
    setShowInstructions((prev) => !prev);
  };

  function handleClick() {
    alert('Clicked!');
  };

  return (
    <div className="app">
      <Header showInstructions={showInstructions} toggleInstructions={toggleInstructions}/>
      <Instructions showInstructions={showInstructions}/>
      <Main handleClick={handleClick} />
      <Footer />
    </div>
  );
};

export default App;
