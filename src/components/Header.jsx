import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscCloudUpload, VscListUnordered, VscCircleSlash, VscInfo } from "react-icons/vsc";

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
        px-6 py-6
        md:px-6  md:py-6
        xl:px-6  xl:py-2
        border-2 border-[#E6E6E6] 
        backdrop-blur-md
        z-50 
      " >
            {/* Logo: วางไว้ซ้ายสุดแบบ absolute */}
            <Link to="/" className="absolute left-6">
                <h1 className='font-kumbh text-3xl font-bold ml-3 [text-shadow:1px_1px_6px_rgba(24,162,137,58)]'>SANPITCH.P</h1>
            </Link>

            {/* Desktop Links: จัดกึ่งกลาง */}
            <div className="hidden xl:flex space-x-8 text-2xl font-lacquer">
                <Link to="/" className="hover:[text-shadow:3px_3px_9px_rgba(24,162,137,58)]">Home</Link>
                <Link to="/MyArtWork" className="hover:[text-shadow:3px_3px_9px_rgba(24,162,137,58)]">MyArtWork</Link>
                <Link to="/Myworkpage" className="hover:[text-shadow:3px_3px_9px_rgba(24,162,137,58)]">Experience</Link>
                <Link to="/Certifi" className="hover:[text-shadow:3px_3px_9px_rgba(24,162,137,58)]">Certificate</Link>
                <Link to="/Myteam" className="hover:[text-shadow:3px_3px_9px_rgba(24,162,137,58)]">Teammate</Link>
            </div>

            <a
                href="https://drive.google.com/drive/folders/1zUuoUkdCs4kEVCTwR96vas7ETIfeR5a2?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex absolute right-6 "
            >
                <VscInfo className="text-4xl text-white hover:filter hover:drop-shadow-[1px_1px_9px_rgba(24,162,137,0.58)]" />
            </a>
            {/* Mobile action buttons: Upload + Hamburger */}
            <div className="flex  absolute right-4 md:right-6 items-center space-x-4 xl:hidden">
                <a
                    href="https://drive.google.com/drive/folders/1zUuoUkdCs4kEVCTwR96vas7ETIfeR5a2?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <VscInfo className="text-3xl hover:filter hover:drop-shadow-[1px_1px_9px_rgba(24,162,137,0.58)]" />
                </a>
                <button
                    onClick={toggleMenu}
                    className="relative w-8 h-8 overflow-hidden"
                >
                    {/* List icon */}
                    <VscListUnordered
                        className={`
            absolute inset-0 text-3xl
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"}
          `}
                    />
                    {/* Slash icon */}
                    <VscCircleSlash
                        className={`
            absolute inset-0 text-3xl
            transition-all duration-300 ease-in-out
            ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"}
          `}
                    />
                </button>
            </div>



            {/* Mobile menu */}
            <div className={`
            font-lacquer text-2xl pr-5 mt-1
          xl:hidden absolute top-full left-0 right-0 rounded-b-xl
          flex flex-col items-end space-y-2 py-4
          bg-black/30 backdrop-blur-md
          transition-[max-height,opacity] duration-500 ease-in-out
          overflow-hidden
          ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                <Link to="/" className="hover:[text-shadow:3px_3px_9px_rgba(24,162,137,58)]" >Home -</Link>
                <Link to="/MyArtWork" className="hover:[text-shadow:3px_3px_9px_rgba(24,162,137,58)]">MyArtWork -</Link>
                <Link to="/Myworkpage" className="hover:[text-shadow:3px_3px_9px_rgba(24,162,137,58)]">Experience -</Link>
                <Link to="/Certifi" className="hover:[text-shadow:3px_3px_9px_rgba(24,162,137,58)]">Certificate -</Link>
                <Link to="/Myteam" className="hover:[text-shadow:3px_3px_9px_rgba(24,162,137,58)]">Teammate -</Link>
            </div>
        </nav>
    );
}

export default Header;
