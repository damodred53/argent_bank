import React from "react";
import Utilisateur from "../../assets/utilisateur.svg";
import argentBankLogo from "../../assets/argentBank.png";


const Header = () => {


    return (

        <section className="header">
            <img className="header_logo" src={argentBankLogo} alt="logo de la marque argent banque"></img>
            <div className="header_div">
                <img className="header_div_image" src={Utilisateur} alt="icône de connexion" />
                <a className="header_div_link" href="#">Sign in</a>
            </div>
            
        </section>

    )
}

export default Header;