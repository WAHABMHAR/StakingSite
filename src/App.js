import { Box } from "@mui/material";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";
import WhitePaper from "./Components/WhitePaper/WhitePaper";
import { Routes, Route } from "react-router-dom";
import Gamefi from "./Components/Gamefi/Gamefi";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<WhitePaper />} />
        <Route path="/gamefi" element={<Gamefi />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
