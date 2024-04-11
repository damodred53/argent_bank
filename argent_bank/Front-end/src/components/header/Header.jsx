import React from "react";
import Utilisateur from "../../assets/utilisateur.svg";
import argentBankLogo from "../../assets/argentBank.png";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react"
import Signout from "../../assets/sign_out.svg";
import Services from "../../services/Services?jsx";
import { useSelector } from "react-redux";


const Header = () => {

    const [ isProfilURL, setIsProfileUrl ] = useState(false);
    const [ nameUser, setNameUser ] = useState('');

    const location = useLocation();

    const argentBankUser = useSelector(state => state.argent_bank_user)


    useEffect(() => {

            const checkUrl = () => {

                if (location.pathname.includes('/profile')) {
                    setIsProfileUrl(true)
                } else {
                    setIsProfileUrl(false)
                }
            }

            const getUserName = async () => {

                if (localStorage.getItem('token') === null) {
                    return
                } else {

                    const fetchDataUser = await Services.getUser()

                if (fetchDataUser) {
                    setNameUser(fetchDataUser.body.firstName)
                }
                }
                
            }

            checkUrl()
            getUserName()
    }, [isProfilURL])

    const handleRemoveToken = () => {
        localStorage.removeItem('token')
    }
    
    return (

        <section className="header">

            <img className="header_logo" src={argentBankLogo} alt="logo de la marque argent banque"/>
            <div className="header_div">
                <img className="header_div_image" src={Utilisateur} alt="icône de connexion" />
                
                {isProfilURL ? 
                <div className="header_div_signout">
                    <span>{nameUser}</span>
                    <div className="header_div_signout">
                        <img className="header_div_signout_icon" src={Signout} alt="icone de déconnexion" /> 
                        <span onClick={handleRemoveToken}>
                            <p className="header_div_link"><Link style={{ textDecoration: 'none' }} to="/">Sign out</Link></p>
                        </span>
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