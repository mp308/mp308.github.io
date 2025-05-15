import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscCloudUpload } from "react-icons/vsc";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu
    };

    return (
        <nav className="
        fixed top-4 inset-x-4 md:inset-x-8
         text-[#E6E6E6]
        rounded-3xl
        flex items-center justify-center
        px-6  py-3
        border-2 border-[#E6E6E6] 
        backdrop-blur-md
        z-50 
      " >
            {/* Logo: วางไว้ซ้ายสุดแบบ absolute */}
            <Link to="/" className="absolute left-6">
                <h1 className='font-kumbh text-3xl font-bold ml-3 '>SANPITCH.P</h1>
            </Link>

            {/* Desktop Links: จัดกึ่งกลาง */}
            <div className="hidden xl:flex space-x-8 text-2xl font-lacquer">
                <Link to="/">Home</Link>
                <Link to="/MyArtWork">MyArtWork</Link>
                <Link to="/Myworkpage">Experience</Link>
                <Link to="/Certifi">Certificate</Link>
                <Link to="/Myteam">Teammate</Link>
            </div>

            <a
                href="https://drive.google.com/drive/folders/1zUuoUkdCs4kEVCTwR96vas7ETIfeR5a2?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-6"
            >
                <VscCloudUpload className="text-4xl text-white hover:text-yellow-400 transition-colors" />
            </a>
            {/* Mobile action buttons: Upload + Hamburger */}
            <div className="flex md:hidden absolute right-4 md:right-6 items-center space-x-4">
                <a
                    href="https://drive.google.com/drive/folders/1zUuoUkdCs4kEVCTwR96vas7ETIfeR5a2?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <VscCloudUpload className="text-3xl hover:text-yellow-400 transition-colors" />
                </a>
                <button onClick={toggleMenu}>
                    <GiHamburgerMenu className="text-3xl" />
                </button>
            </div>
            {/* Mobile burger icon: absolute ขวาสุด */}
            <button
                className="md:hidden absolute right-6 text-3xl"
                onClick={toggleMenu}
            >
                <GiHamburgerMenu />
            </button>

            {/* Mobile menu */}
            <div className={`
          md:hidden absolute top-full left-0 right-0
          bg-[#191C20] rounded-b-xl
          flex flex-col items-center space-y-2 py-4
          transition-[max-height,opacity] duration-300 ease-in-out
          overflow-hidden
          ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                <Link to="/">Home</Link>
                <Link to="/MyArtWork">MyArtWork</Link>
                <Link to="/Myworkpage">Experience</Link>
                <Link to="/Certifi">Certificate</Link>
                <Link to="/Myteam">Teammate</Link>
            </div>
        </nav>
    );
}

export default Header;
