import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Section from './components/Section';
import Button from './components/Button';

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
      <Main >
        <Section handleClick={handleClick}/>  
        <Section>
          <Button variant='danger' size='small' text='comp' fullWidth onClick={
            () => alert('Component composition button')
          }/>
        </Section>
      </Main> 
      <Footer />
    </div>
  );
};

export default App;
