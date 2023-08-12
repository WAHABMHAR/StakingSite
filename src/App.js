import { Box } from "@mui/material";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer";
import WhitePaper from "./Components/WhitePaper/WhitePaper";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header ></Header>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/whitepaper" element={<WhitePaper/>}>
        {/* <Route path="/" element={<Gamefi/>}/>
        <Route path="/" element={<Staking/>}/>
        <Route path="/" element={<Earning/>}/>
        <Route path="/" element={<Farming/>}/> */}
        </Route>

    </Routes>
    <Footer></Footer>
      </>
  );
}

export default App;
