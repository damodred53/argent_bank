import React from "react";

/**
 * Fonction permettant l'affichage des bouttons présents sur le site web.
 * @param {Objet} param0 
 * @param {string} param0.textContent
 * @param {string} param0.className
 * @returns {JSX.Element}
 */
const Button = ({textContent, className}) => {

    return (
        <button className={className} >{textContent}</button>
    )
}

export default Button;