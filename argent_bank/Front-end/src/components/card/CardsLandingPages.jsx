import React from "react";

/**
 * Composant représentant une carte sur une page d'atterrissage.
 * 
 * @param {object} param0 - Les paramètres du composant.
 * @param {number} param0.index - L'index de la carte.
 * @param {object} param0.data - Les données de la carte.
 * @param {string[]} param0.pictures - Les images associées à chaque carte.
 * @returns {JSX.Element} - La représentation JSX de la carte.
 */

const CardsLandingPages = ({index, data, pictures}) => {
    return (
        <article className="cardLandingPage">
            <img className="cardLandingPage_icon" src={pictures[index]} alt={data.title} />
            <h2 className="cardLandingPage_title">{data.title}</h2>
            <p className="cardLandingPage_paragraph">{data.textContent}</p>
        </article>
    )
}

export default CardsLandingPages;