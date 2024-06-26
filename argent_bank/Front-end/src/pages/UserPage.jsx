
import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import WelcomingUser from "../components/UserPart/welcomingUser/WelcomingUser";
import { Provider } from "react-redux";
import { store } from "../redux";

/**
 * Fonction affichant la page du profile de l'utilisateur
 * @returns {JSX.Element}
 */

const UserPage = () => {

    return (
        <Provider store={store}>
        <div>
            <Header />
            <WelcomingUser />
            <Footer />
        </div>
        </Provider>
    )
}

export default UserPage;