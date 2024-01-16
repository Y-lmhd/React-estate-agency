import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">

                <div className="footer-top">
                    <div className="footer-estate-agency">
                        <h3>Estate Agency</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ab laborum explicabo
                            similique perspiciatis voluptates quidem beatae optio aliquid amet!
                        </p>
                        <p>
                            <span>Phone .</span> contact@agency.com
                        </p>
                        <p>
                            <span>Email .</span> +01 020 30405
                        </p>
                    </div>
                    <div className="footer-company-links">
                        <h3>The Company</h3>
                        <ul>
                            <li><a href="#">Site Map</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Affiliate</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-international-links">
                        <h3>International sites</h3>
                        <ul>
                            <li><a href="#">United State</a></li>
                            <li><a href="#">China</a></li>
                            <li><a href="#">France</a></li>
                            <li><a href="#">Italy</a></li>
                            <li><a href="#">Spain</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <nav className="footer-bottom-nav">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Property</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                    </nav>
                    <div className="footer-bottom-nav">
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copyright-footer">
                    <p class="copyright color-text-a">
                        © Copyright LMHD All Rights Reserved.
                    </p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;



