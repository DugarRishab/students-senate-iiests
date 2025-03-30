import React from 'react'

const Button = ({ text, endIcon, onClick, className }) => {
    return (
        <button onClick={onClick} className={`${className}`}>
            <span>{text}</span>
            <span>{endIcon}</span>
        </button>
    );
};

export default Button
