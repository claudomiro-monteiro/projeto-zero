import { Carousel } from "./pages/Carousel/Carousel";
import { Contato } from "./pages/Contato/Contato";
import { FemininoAdulto } from "./pages/FemininoAdulto/FemininoAdulto";
import { Localizacao } from "./pages/Localizacao/Localizacao";
import { MasculinoAdulto } from "./pages/MasculinoAdulto/MasculinoAdulto";
import { Navbar } from "./pages/Navbar/Navbar";
import { QuemSomos } from "./pages/QuemSomos/QuemSomos";

function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <Carousel />
        <FemininoAdulto />
        <MasculinoAdulto />
        <QuemSomos />
        <Localizacao />
        <Contato />
      </>
    </div>
  );
}

export default App;
