import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
function App() {
 const [cart, setCart] = useState([]);

return (
<>
<Navbar />
<Routes>
<Route path="/" element={<Home cart={cart} setCart={setCart} />} />
<Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About />} />
<Route path="/cart" element={<Cart cart={cart} />} />
</Routes>
<Footer />
</>
);
}
export default App;
