import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PageEuro from "./pages/PageEuro";
import PageDolar from "./pages/pageDolar";
import PageInflacion from "./pages/PageInflacion";


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/pageDolar" element={<PageDolar/>}/>
        <Route path="/pageEuro" element={<PageEuro/>}/>
        <Route path="/pageInflacion" element={<PageInflacion/>}/>
      </Routes>
    </Router>
  );
}

export default App;
