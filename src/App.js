import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./view/Landing";
import { Routes, Route } from 'react-router-dom'
import StampProduct from "./view/StampProduct";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/stamp" element={<StampProduct />} />
      </Routes>
      
    </>
  );
}

export default App;
