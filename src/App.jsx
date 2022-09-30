import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Galeria from "./pages/Galeria";
import Institucion from "./pages/Institucion";
import Landing from "./pages/Landing";
import Proyectos from "./pages/Proyectos";

function App() {


  return (

    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/institucion" element={<Institucion />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
