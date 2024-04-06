
import React from "react";
import { useEffect, useState } from "react";
import ServicesToExport from "../../services/Services.jsx";
import CardsLandingPages from "../card/CardsLandingPages.jsx";
import Dialogue from "../../assets/icon-chat.png";
import Billet from "../../assets/icon-money.png";
import Bouclier from "../../assets/icon-security.png";




const Slogans = () => {

    const [data, setData] = useState([]);
    const [pictures, setPictures] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await ServicesToExport.getDataLandingPage();
                setData(response)
                setPictures([Dialogue, Billet, Bouclier])
            } catch (error) {
                console.log('impossible d\'afficher les données de la page d\'accueil', error);
            }
        }

        fetchData()
}, [])


    return (
        <div className="slogan">{data && data.length > 0 && (data.map((item, index) => {
            return <CardsLandingPages key={index} index={index} data={item} pictures={pictures} />
        }))}
        </div>

    )
}

export default Slogans;