import React from "react";      
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
                        <li><a to="/">HOME</a></li>
                        <li><a href="#">Property</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li>
                            <a href="#">
                                <i class="fas fa-phone"></i>
                                +01 (02) 030 4050
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar; 