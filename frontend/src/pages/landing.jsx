import React, { useState } from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'

export default function LandingPage() {
    const router = useNavigate();
    
    // State to track if the mobile menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>
                        <span className="brand">Meetora</span>
                    </h2>
                </div>
                
                {/* Hamburger Icon for Mobile */}
                <div className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? "✕" : "☰"}
                </div>

                {/* Navigation Links */}
                <div className={`navlist ${isMenuOpen ? "active" : ""}`}>
                    <p onClick={() => {
                        router("/aljk23");
                        setIsMenuOpen(false); // Closes menu after clicking
                    }}>Join as Guest</p>
                    
                    <p onClick={() => {
                        router("/auth");
                        setIsMenuOpen(false);
                    }}>Sign Up</p>
                    
                    <div onClick={() => {
                        router("/auth");
                        setIsMenuOpen(false);
                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>
                    <p>
                        Experience secure HD video meetings with Meetora.
                        Create or join meetings instantly with one click.
                    </p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="Mobile Preview" />
                </div>
            </div>
        </div>
    )
}