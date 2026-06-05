import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Section from './components/Section';
import Button from './components/Button';
import downloadButtonFile from './utilites/downloadButtonFile';

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
      <Header title='Components library'>
        <Button variant='outline' size='medium' text='Show Instruction' 
                  onClick={toggleInstructions} />
        <Button variant='primary' size='medium' text='Download button.js' 
                  onClick={downloadButtonFile} />
      </Header>
      <Instructions showInstructions={showInstructions}/>
      <Main >
        <Section title='Variants'>
          <Button variant='primary'>Primary</Button>  
          <Button variant='secondary'>Secondary</Button> 
          <Button variant='danger'>Danger</Button> 
          <Button variant='gradient'>Gradient</Button> 
          <Button variant='outline'>Outline</Button> 
        </Section>  
        <Section title='Sizes'>
          <Button variant='primary' size='small'>Small</Button> 
          <Button variant='secondary' size='medium'>Medium</Button> 
          <Button variant='danger' size='large'>Large</Button> 
        </Section>
        <Section title='Button states'>
          <Button variant='primary'>Default</Button> 
          <Button variant='secondary' isDisabled>Disabled</Button> 
        </Section>
        <Section title='Full width button'>
          <Button variant='outline' fullWidth>Full with button</Button> 
        </Section>
        <Section>
          <Button variant='primary' onClick={handleClick}>Click me!</Button>
        </Section>
      </Main> 
      <Footer />
    </div>
  );
};

export default App;
