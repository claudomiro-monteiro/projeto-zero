<<<<<<< HEAD
import { useState } from "react";
import { Carousel } from "./pages/Carousel/Carousel";
import { Contato } from "./pages/Contato/Contato";
import { FemininoAdulto } from "./pages/FemininoAdulto/FemininoAdulto";
import { Localizacao } from "./pages/Localizacao/Localizacao";
import { MasculinoAdulto } from "./pages/MasculinoAdulto/MasculinoAdulto";
import { Navbar } from "./pages/Navbar/Navbar";
import { QuemSomos } from "./pages/QuemSomos/QuemSomos";
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> parent of effedf2... add Navbar

function App() {

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  }
  const [sidebar, setSidebar] = useState(false)
  const openSidebar = () => {
    setSidebar(!sidebar)
  }

  const handleClick = () => {
    toggle();
    openSidebar();
  }

  return (
<<<<<<< HEAD
      <>
        <Navbar sidebar={sidebar}
        setSidebar={setSidebar}
        open={open}
        handleClick={handleClick} 
        />
        <Carousel />
        <FemininoAdulto />
        <MasculinoAdulto />
        <QuemSomos />
        <Localizacao />
        <Contato />
      </>
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> parent of effedf2... add Navbar
  );
}

export default App;
