import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./view/Landing";
import { Routes, Route } from 'react-router-dom'
import Product from "./components/products/Product";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={ <Product/> } />
      </Routes>
      
    </>
  );
}

export default App;
