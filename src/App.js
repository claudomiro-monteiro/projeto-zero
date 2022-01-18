import { useState } from "react";
// import { Carousel } from "./pages/Carousel/Carousel";
import { CarouselImage } from "./pages/Carousel/CarouselImage";
import { Contato } from "./pages/Contato/Contato";
import { FemininoAdulto } from "./pages/FemininoAdulto/FemininoAdulto";
import { Localizacao } from "./pages/Localizacao/Localizacao";
import { MasculinoAdulto } from "./pages/MasculinoAdulto/MasculinoAdulto";
import { Navbar } from "./pages/Navbar/Navbar";
import { QuemSomos } from "./pages/QuemSomos/QuemSomos";
// import { Footer } from "./pages/Footer/Footer";
import { Teste } from "./pages/Teste/Teste";

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
    <div className="App">
      <>
        <Navbar sidebar={sidebar}
          setSidebar={setSidebar}
          open={open}
          handleClick={handleClick}
        />
        <CarouselImage />
        <FemininoAdulto />
        <MasculinoAdulto />
        <QuemSomos />
        <Localizacao />
        <Contato />
        {/* <Footer /> */}
        <Teste />
      </>
    </div>
  );
}

export default App;
