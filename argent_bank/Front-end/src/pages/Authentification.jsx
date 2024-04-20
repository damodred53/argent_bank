
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FormAuthentification from "../components/formAuth/FormAuth";
import {Provider} from "react-redux";
import { store } from "../redux.js";
 
/**
 * Fonction affichant la page de login pour l'utilisateur
 * @returns {JSX.Element}
 */
const Authentification = () => {

    return (
        <Provider store={store}>
        <div className="authentification">
            <Header />
            <FormAuthentification />
            <Footer />
        </div>
        </Provider>
    )
}

export default Authentification;