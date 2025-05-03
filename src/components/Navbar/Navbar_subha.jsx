import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

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
        { name: "Home", href: "/" },
        { name: "Events", href: "#" },
        { name: "About Us", href: "/about" },
    ];

    return (
        <header
            className={`w-full py-4 px-6 fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-tintWhite border-b border-tintPurple"
                    : "bg-transparent"
            }`}
        >
            <nav
                className={`h-full mx-auto flex items-center ${scrolled ? "justify-between" : "justify-between"} max-sm:justify-center transition-all duration-300 px-4`}
            >
                <div className="flex items-center cursor-pointer">
                    <img
                        src="./assets/imgs/IIEST_Shibpur_Logo.png"
                        alt="Logo"
                        className={`h-10 pr-4 ${scrolled && "NOT_hidden"} max-sm:hidden transition-all duration-300`}
                    />
                    <h1
                        className={`text-xl font-[700] text-black w-24 leading-4 ${scrolled && "hidden"} max-sm:hidden transition-all duration-300`}
                    >
                        STUDENTS' SENATE
                    </h1>
                </div>

                <div className="flex gap-12 font-[400] text-black">
                    {navLinks.map((item) => (
                        <div
                            key={item.href}
                            onClick={() => {
                                navigate(item.href);
                            }}
                            className="hover:underline"
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
