/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                deepBlue: "#0B0B26",
                mediumBlue: "#0E0E6B",
                purple: "#4C4CED",
                tintPurple: "#A6A6DE",
                yellow: "#F4B860",
                blue: "#1F1D86",
                tintWhite: "#DEF0F9",
            },
            fontFamily: {
                bodoni: ["'Bodoni Moda'", "serif"],
                viaoda: ["'Viaoda Libre'", "serif"],
                poppins: ["Poppins", "sans"],
            },
        },
    },
    plugins: [],
};
