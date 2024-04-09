import React from "react";
import Utilisateur from "../../assets/utilisateur.svg";
import argentBankLogo from "../../assets/argentBank.png";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react"
import Signout from "../../assets/sign_out.svg";

const Header = () => {

    const [ isProfilURL, setIsProfileUrl ] = useState(false);

    const location = useLocation();

    useEffect(() => {

            const checkUrl = () => {

                if (location.pathname.includes('/profile')) {
                    setIsProfileUrl(true)

                } else {
                    setIsProfileUrl(false)

                }

            }

            checkUrl()
    }, [isProfilURL])

    

    return (

        <section className="header">

            <img className="header_logo" src={argentBankLogo} alt="logo de la marque argent banque"/>
            <div className="header_div">
                <img className="header_div_image" src={Utilisateur} alt="icône de connexion" />
                
                {isProfilURL ? 
                <div className="header_div_signout">
                    <span>John</span>
                    <div className="header_div_signout">
                        <img className="header_div_signout_icon" src={Signout} alt="icone de déconnexion" /> 
                        <p className="header_div_link"><Link style={{ textDecoration: 'none' }} to="/">Sign out</Link></p>
                    </div>
                </div>
                :
                    <p className="header_div_link"><Link style={{ textDecoration: 'none' }} to="/login">Sign in</Link></p>
                
                }
                
            </div>

        </section>

    )
}

export default Header;