import React from "react";
import Utilisateur from "../../assets/utilisateur.svg";
import argentBankLogo from "../../assets/argentBank.png";
import { Link } from 'react-router-dom';

const Header = () => {


    return (

        <section className="header">
            <img className="header_logo" src={argentBankLogo} alt="logo de la marque argent banque"></img>
            <div className="header_div">
                <img className="header_div_image" src={Utilisateur} alt="icône de connexion" />
                <p className="header_div_link"><Link to="/login">Sign in</Link></p>
            </div>
            
        </section>

    )
}

export default Header;