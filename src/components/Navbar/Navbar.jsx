import React, { useState, useEffect } from "react";

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


    return (
        <header className={`w-full h-16 sticky top-0 z-50 bg-[#DEF0F9] transition-all duration-300`}>
            <nav className={`max-w-[1700px] h-full mx-auto flex items-center ${scrolled ? "justify-between" : "justify-center"} transition-all duration-300 px-4`}>
                <div className={`flex items-center cursor-pointer ${scrolled ? "block" : "hidden"} transition-all duration-300`}>
                    <img src="./assets/imgs/IIEST_Shibpur_Logo.png" alt="Logo" className={`h-10 pr-4 transition-all duration-300`} />
                    <h1 className={`text-xl font-[700] text-black w-24 leading-4 transition-all duration-300`}>STUDENTS' SENATE</h1>
                </div>

                <div className={`flex ${scrolled ? "gap-5" : "gap-20"} font-[700] text-black`}>
                    <a href="#" className="hover:underline">Home</a>
                    <a href="/council" className="hover:underline">Council</a>
                    <a href="/about" className="hover:underline">About Us</a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;