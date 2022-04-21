import { useState } from "react";
import { Navbar } from "./pages/Navbar/Navbar";
import { CarouselImage } from "./pages/Carousel/CarouselImage";
import { Feminino } from "./pages/Feminino/Feminino";
import { Masculino } from "./pages/Masculino/Masculino";
import { QuemSomos } from "./pages/QuemSomos/QuemSomos";
import { Localizacao } from "./pages/Localizacao/Localizacao";
import { Contato } from "./pages/Contato/Contato";
import { Footer } from "./pages/Footer/Footer";

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
        <Feminino />
        <Masculino />
        <QuemSomos />
        <Localizacao />
        <Contato />
        <Footer />
      </>
    </div>
  );
}

export default App;
