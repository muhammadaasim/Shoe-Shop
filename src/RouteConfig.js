import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Products from './Components/Products';
import Details from './Components/Details';
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Error404 from './Components/Error404'
const RouteConfig = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/details/:id" element={<Details />} />
                    <Route path="/Cart" element={<Cart />} />
                    <Route path="/*" element={<Error404 />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    )
}
export default RouteConfig
