import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import NotFound from './component/NotFound';
import Home from './pages/Home';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/productdetail/:slug" element={<ProductDetails />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
      )
}

export default App
