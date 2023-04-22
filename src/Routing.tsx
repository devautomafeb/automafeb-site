import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/p1" element={<Page1 />} />
                <Route path="/p2" element={<Page2 />} />
                <Route path="/p3" element={<Page3 />} />
            </Routes>
        </div>
    )
}

export default Routing