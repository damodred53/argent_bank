import React from "react";

/**
 * Fonction gérant l'affichage de la bannière de la page d'accueil
 * @returns {JSX.Element}
 */
const Banner  = () => {

    return (
        <section className="banner">
            <article className="banner_article">

                <div className="banner_article_quotes">
                    <p>No fees.</p>
                    <p>No minimum deposit.</p>
                    <p>High interest rates.</p>
                </div>

                <div className="banner_article_paragraph">
                    <p>Open a savings account with Argent Bank Today!</p>
                </div>

            </article>

        </section>
    )
}

export default Banner;