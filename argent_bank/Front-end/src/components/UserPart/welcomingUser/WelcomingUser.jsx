import React, { useState, useEffect } from "react";
import Button from "../../button/Button";
import AccountView from "../accountView/AccountView";
import AllServices from "../../../services/Services";
import { useSelector, useDispatch } from "react-redux";
import { updateUserStore, getBankUser } from "../../../redux";

/**
 * Fonction gérant la partie nominale en haut de page de profile
 * @returns 
 */

const WelcomingUser = () => {
    const [accounts, setAccounts] = useState([]);
    const [appearrance, setAppearance] = useState(true);

    const dispatch = useDispatch();
    let firstName2 = "";
    let lastName2 = "";

    const bankUserName = useSelector(state => state.argent_bank_user);

    if (bankUserName) {
        firstName2 = bankUserName.firstname;
        lastName2 = bankUserName.lastname;
    } else {
        console.log('Impossible de récupérer les informations de l\'utilisateur');
    }

    /**
     * fonction de faire apparaître/disparaître le formulaire de 
     * modification du nom
     * @param {MouseEvent} e 
     */
    const toggleEditName = (e) => {
        e.preventDefault();
        setAppearance(!appearrance);
    }

    /**
     * Fonction permettant de gérer l'envoi du formulaire en modifiant le store 
     * et ensuite la base de données
     * @param {MouseEvent} e 
     */

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newName = document.querySelector('#newname').value;
        const newLastName = document.querySelector('#newlastname').value;
        
        dispatch(updateUserStore({ firstName: newName, lastName: newLastName }));
        AllServices.updateUser(newName, newLastName);
    }

    useEffect(() => {
        /**
         * Fonction permettant d'aller chercher les données dynamique de l'utilisateur et puis 
         * de les ajouter au store pour les autres composants.
         */
        const getNameUser = async () => {
    
            try {
                const response = await AllServices.getUser()
                if(response) {
                    dispatch(getBankUser(response))
                }
            } catch (error) {
                console.log('impossible d\'afficher les noms et prénoms de l\'utilisateur', error);
            }
        }
        getNameUser()
    }, [dispatch])
    

    useEffect(() => {

        /**
         * fonction permettant d'aller chercher les données mockées et de les mapper dans le composant 
         * AccountView
         */
        
        const fetchData = async () => {
            const response = await AllServices.getDataBankAccount();
            if (response) {
               setAccounts(response);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="userpage">
            <div className="userpage_div">
                <h1 className="userpage_div_title">Welcome Back</h1>
                <h1 className="userpage_div_title">{firstName2} {lastName2}</h1>
                
                    {appearrance ? 
                    <span className="test_span" onClick={toggleEditName}>
                        <Button textContent="Edit Name" className="userpage_div_button" />
                    </span>
                    :
                    <div className="form_edit">
                    <form className="form_edit_part" onSubmit={handleSubmit}>
                        <div className="form_edit_part_div">
                            <input className="form_edit_part_div_input" id="newname" type="text" />
                            <input className="form_edit_part_div_input" id="newlastname" type="text" />
                        </div>
                        <div className="form_edit_part_div_buttons">
                            <span >
                                <Button className="form_edit_part_div_buttons" textContent="Save" type="submit" />
                            </span>
                            <span className="test_span" onClick={(e) => toggleEditName(e)}>
                                <Button className="form_edit_part_div_buttons"  textContent="Cancel" />
                            </span>
                        </div>
                    </form>
                    </div>
                    }
                <div className="userpage_div_wrapper">
                    {accounts.map((item, index) => {
                        return <AccountView content={item} index={index} key={index}/>
                    })}
                </div>
            </div>
        </section>
    );
};

export default WelcomingUser;
