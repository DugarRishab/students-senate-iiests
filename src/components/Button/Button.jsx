import React from 'react'

const Button = ({ text, endIcon, onClick, className }) => {
    return (
        <button 
            onClick={onClick}
            className={`${className} bg-[#1F1D86] text-white text-xs min-[590px]:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl flex justify-center items-center gap-2 max-w-max pl-3 pr-2 pt-1 pb-1.5`}
        >
            <span>{text}</span>
            <span>{endIcon}</span>
        </button>
    );
};

export default Button
