import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PageEuro from "./pages/PageEuro";
import PageDolar from "./pages/PageDolar";
import PageInflacion from "./pages/PageInflacion";

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
      </Routes>
    </Router>
  );
}

export default App;
