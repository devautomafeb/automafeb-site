import React from 'react';

import { FiArrowRightCircle } from "react-icons/fi";
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div>
                <Link to='/p1'>
                    <div>
                        <h2><FiArrowRightCircle />Pagina 01</h2>
                    </div>
                </Link>
                <Link to='/p2'>
                    <div>
                        <h2><FiArrowRightCircle />Pagina 02</h2>
                    </div>
                </Link>
                <Link to='/p3'>
                    <div>
                        <h2><FiArrowRightCircle />Pagina 03</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Home