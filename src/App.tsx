import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PageEuro from "./pages/PageEuro";
import PageDolar from "./pages/PageDolar";
import PageInflacion from "./pages/PageInflacion";
import Footer from "./components/Footer";
import PageTyC from "./pages/PageTyC";


function App() {
  return (
    <Router>
      <NavBar />
      <div className="grafico">
        {[...Array(60)].map((_, i) => (
          <div key={i} className="barra"></div>
        ))}
      </div>
      <Routes>
        <Route path="/DebajoDelColchon/" element={<PageDolar />} />
        <Route path="/DebajoDelColchon/pageDolar" element={<PageDolar />} />
        <Route path="/DebajoDelColchon/pageEuro" element={<PageEuro />} />
        <Route
          path="/DebajoDelColchon/pageInflacion"
          element={<PageInflacion />}
        />
         <Route path="/terminos-condiciones" element={<PageTyC />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
