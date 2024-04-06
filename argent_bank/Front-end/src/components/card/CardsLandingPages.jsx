import React from "react";

const CardsLandingPages = ({index, data, pictures}) => {

    console.log(data)
    return (
        <article className="cardLandingPage">
            <img className="cardLandingPage_icon" src={pictures[index]} alt={data.title} />
            <h2 className="cardLandingPage_title">{data.title}</h2>
            <p className="cardLandingPage_paragraph">{data.textContent}</p>
        </article>
    )
}

export default CardsLandingPages;