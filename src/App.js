import { useState } from "react";
import { Carousel } from "./pages/Carousel/Carousel";
import { Contato } from "./pages/Contato/Contato";
import { FemininoAdulto } from "./pages/FemininoAdulto/FemininoAdulto";
import { Localizacao } from "./pages/Localizacao/Localizacao";
import { MasculinoAdulto } from "./pages/MasculinoAdulto/MasculinoAdulto";
import { Navbar } from "./pages/Navbar/Navbar";
import { QuemSomos } from "./pages/QuemSomos/QuemSomos";
import './App.css';

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
  );
}

export default App;
