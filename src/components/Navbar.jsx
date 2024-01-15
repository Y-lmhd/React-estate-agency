import React from "react";      
import { Link } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    Logo
                </div>
                <nav className="navigation-menu-top">
                    <ul>

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/property">Property</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>
                            <div>
                                <i class="fas fa-phone"></i>
                                +01 (02) 030 4050
                            </div>
                        </li>
                    </ul>
                </nav>   
            </div>
            
        </header>     
    );
}

export default Navbar; 



