import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu
    };

    return (
        <>
        
        <nav className="bg-[#141414] p-6 text-[#E6E6E6]">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img className="h-20 w-auto flex" src={logo} alt="CEO" />
                </Link>

                <div>
                    {/* Toggle menu button */}
                    <div className="md:hidden text-3xl">
                        <GiHamburgerMenu
                            id="menu-toggle"
                            className="hover:text-yellow-500 transition delay-50 duration-300 ease-in-out"
                            onClick={toggleMenu}
                        />
                    </div>

                    <div className="hidden md:flex space-x-6 text-3xl">
                        <Link to="/" className="font-lacquer hover:text-yellow-500 transition delay-150 duration-300 ease-in-out">Home</Link>
                        <Link to="/MyArtWork" className="font-lacquer hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">MyArtWork</Link>
                        <Link to="/Myworkpage" className="font-lacquer hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Experince</Link>
                        <Link to="/Certifi" className="font-lacquer hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Certificate</Link>
                        <Link to="/Myteam" className="font-lacquer hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Teamate</Link>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden flex flex-col items-center text-xl space-y-4 pt-2 transition-all duration-500 ease-in-out overflow-hidden ${
                    isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <Link to="/" className="font-lacquer hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Home</Link>
                <Link to="/MyArtWork" className="font-lacquer hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">MyArtWork</Link>
                <Link to="/Myworkpage" className="font-lacquer hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Experince</Link>
                <Link to="/Certifi" className="font-lacquer hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Certificate</Link>
                <Link to="/Myteam" className="font-lacquer hover:text-yellow-500 transition delay-50 duration-300 ease-in-out">Teamate</Link>
            </div>
        </nav>
         <div className="bg-[#161616] w-full h-1"></div>
        </>
    );
}

export default Header;
