import React from "react";

const CardsLandingPages = ({index, data, pictures}) => {

    console.log(data)
    return (
        <article>
            <img src={pictures[index]} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.textContent}</p>
        </article>
    )
}

export default CardsLandingPages;