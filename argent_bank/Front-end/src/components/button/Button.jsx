import React from "react";

const Button = ({textContent, className}) => {


    return (
        <button className={className} >{textContent}</button>
    )
}

export default Button;