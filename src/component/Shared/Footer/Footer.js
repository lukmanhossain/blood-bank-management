import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-col">
                        <h4>Blood Bank</h4>
                        <ul>
                            <li><a href="/#">about us</a></li>
                            <li><a href="/#">our services</a></li>
                            <li><a href="/#">privacy policy</a></li>
                            <li><a href="/#">join us</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="/#">FAQ</a></li>
                            <li><a href="/#">contact</a></li>
                            <li><a href="/#">query</a></li>
                            <li><a href="/#">availablity</a></li>
                            <li><a href="/#">payment options</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>Donate Blood</h4>
                        <ul>
                            <li><a href="/#">Register</a></li>
                            <li><a href="/#">get blood</a></li>
                            <li><a href="/#">be a donor</a></li>
                            <li><a href="/#">donate money</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>follow us</h4>
                        <div class="social-links">
                            <a href="/#"><i class="fab fa-facebook-f"></i></a>
                            <a href="/#"><i class="fab fa-twitter"></i></a>
                            <a href="/#"><i class="fab fa-instagram"></i></a>
                            <a href="/#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;