
import React from "react";
import Button from "../../button/Button";

/**
 * Fonction permettant d'afficher les transactions dans la page profile de l'utilisateur
 * @param {Objet} param0 
 * @returns 
 */

const AccountView = ({content}) => {
    return (

        <article className="accountview">
            <div className="accountview_div">
                <p className="accountview_div_name">{content.name}</p>
                <p className="accountview_div_money">${content.money}</p>
                <p className="accountview_div_type">{content.type}</p>
            </div>
            < Button className="accountview_div_button" textContent="View transactions" />
            
        </article>
    )
}

export default AccountView;