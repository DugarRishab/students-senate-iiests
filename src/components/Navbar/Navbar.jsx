import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { name: "Home", to: "/" },
        { name: "Council", to: "/council" },
        { name: "About Us", to: "/about" },
    ];

    return (
        <header className={`w-full h-16 sticky top-0 z-50 bg-[#DEF0F9] transition-all duration-300`}>
            <nav className={`max-w-[1700px] h-full mx-auto flex items-center ${scrolled ? "justify-between" : "justify-center"} transition-all duration-300 px-4`}>
                <div className={`flex items-center cursor-pointer ${scrolled ? "block" : "hidden"} transition-all duration-300`}>
                    <img src="./assets/imgs/IIEST_Shibpur_Logo.png" alt="Logo" className={`h-10 pr-4 transition-all duration-300`} />
                    <h1 className={`text-xl font-[700] text-black w-24 leading-4 transition-all duration-300`}>STUDENTS' SENATE</h1>
                </div>

                <div className={`flex ${scrolled ? "gap-5" : "gap-16"} font-[700] text-black text-nowrap`}>
                    {navLinks.map((link) => (
                        <NavLink 
                            key={link.to}
                            to={link.to} 
                            className={({ isActive }) => 
                                isActive ? "underline" : "hover:underline"
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
