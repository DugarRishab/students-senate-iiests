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
        <header className={`w-full h-16 fixed top-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/5 backdrop-blur-md shadow-lg"
                : "bg-transparent"}`}>
            <nav className={`max-w-[1700px] h-full mx-auto flex items-center ${scrolled ? 'justify-center' : 'justify-between'} max-sm:justify-center transition-all duration-300 px-4`}>
                <div className="flex items-center cursor-pointer">
                    <img src="./assets/imgs/IIEST_Shibpur_Logo.png" alt="Logo" className={`h-10 pr-4 ${scrolled && 'hidden'} max-sm:hidden transition-all duration-300`} />
                    <h1 className={`text-xl font-[700] text-black w-24 leading-4 ${scrolled && 'hidden'} max-sm:hidden transition-all duration-300`}>STUDENTS' SENATE</h1>
                </div>

                <div className="flex gap-20 font-[700] text-black">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="/council" className="hover:underline">Events</a>
                    <a href="/about" className="hover:underline">About Us</a>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;