import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
