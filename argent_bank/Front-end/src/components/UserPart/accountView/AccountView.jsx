
import React from "react";
import Button from "../../button/Button";


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