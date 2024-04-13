Alain Micalaudie
11:50
import "./style.css";
import { useEffect } from "react";
import { useUpdateUsernameMutation } from "../../redux/api/apiSlice";
import Transactions from "../../components/Transactions";
import { selectProfile } from "../../redux/slices/userSlice";
import { selectToken } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";
import { useState, FormEvent, ChangeEvent } from "react";

type EdituserProps = {
    showUser: (params: boolean) => void;
};

export default function Edituser({ showUser }: EdituserProps) {
    //fetch user profile from the store
    const profile = useSelector(selectProfile);
    const authToken = useSelector(selectToken);
    const [formUsername, setFormUsername] = useState(profile.userName);
    const [updateUsername, { isSuccess }] = useUpdateUsernameMutation();
    const onUsernameSaved = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            //DB update of username, this call invalidates TAG for fetchProfile
            //which should refresh automatically
            updateUsername({ userName: formUsername, token: authToken });
        } catch (error) {
            console.log("error in Edituser -> onUsernameSaved() : ", error);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            showUser(true);
        }
    }, [isSuccess]);

    const onUsernameChanged = (e: ChangeEvent<HTMLInputElement>) =>
        setFormUsername(e.target.value);

    return (
        <>
            <main className="main-user">
                <div className="main-user-container">
                    <form onSubmit={onUsernameSaved}>
                        <div className="edit">
                            <h2>Edit user info</h2>
                            <p>
                                <label htmlFor="userName">User name: </label>
                                <input
                                    type="text"
                                    name="userName"
                                    id="userName"
                                    onChange={onUsernameChanged}
                                    value={formUsername}
                                ></input>
                            </p>
                            <p>
                                <label htmlFor="firstName">First name: </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={profile.firstName}
                                    disabled
                                ></input>
                            </p>
                            <p>
                                <label htmlFor="lastName">Last name: </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={profile.lastName}
                                    disabled
                                ></input>
                            </p>
                            <p>
                                <button type="submit">Save</button>
                                <button
                                    type="button"
                                    onClick={() => showUser(true)}
                                >
                                    Cancel
                                </button>
                            </p>
                        </div>
                    </form>
                    <section className="transactions">
                        <Transactions />
                    </section>
                </div>
            </main>
        </>
    );
}





// mon code welcome orginal //

import React, { useState, useEffect } from "react";
import Button from "../../button/Button";
import AccountView from "../accountView/AccountView";
import AllServices from "../../../services/Services";
import { useSelector, useDispatch } from "react-redux";
import { addUser, updateUser, getBankUser } from "../../../redux";
import { getDataUsersThunk } from "../../../slice";


const WelcomingUser = () => {
    const [accounts, setAccounts] = useState([]);
    const [appearrance, setAppearance] = useState(true);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newName, setNewName] = useState('');
    const [newLastName, setNewLastName] = useState('');

    const dispatch = useDispatch()

    let firstName2 = "";
    let lastName2 = "";

    const bankUserName = useSelector(state => state.argent_bank_user);
        console.log('ceci est le store: ', bankUserName)

        // Vérifier si l'objet bankUserName et ses propriétés existent
if (bankUserName && bankUserName.user && bankUserName.user.body) {
    /*const { firstName, lastName } = bankUserName.user.body;*/

    firstName2 = bankUserName.user.body.firstName
    lastName2 = bankUserName.user.body.lastName

    /*console.log('Prénom:', firstName2);
    console.log('Nom de famille:', lastName2);*/
} else {
    console.log('Impossible de récupérer les informations de l\'utilisateur');
}

    const toggleEditName = (e) => {
        e.preventDefault()
        setAppearance(!appearrance)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const newName = document.querySelector('#newname').value;
        const newLastName = document.querySelector('#newlastname').value;
        AllServices.updateUser(newName, newLastName)   /* pour l'instant ça marche pas si j'enlève ça */
        
        /*setNewName(newName);
        setNewLastName(newLastName);*/
        
        dispatch(updateUser({firstName: newName, lastName: newLastName }))

    }

    useEffect(() => {

        dispatch(getBankUser())

        const getNameUser = async () => {
    
            try {
                const response = await AllServices.getUser()

                if(response) {
                    setName('')
                    setLastName('')
                    const data = response
                    setName(data.body.firstName)
                    setLastName(data.body.lastName)
                    dispatch(getBankUser(response))
                }
            } catch (error) {
                console.log('impossible d\'afficher les noms et prénoms de l\'utilisateur', error);
            }
        }
        getNameUser()
    }, [newName, newLastName, dispatch])
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await AllServices.getDataBankAccount();
            if (response) {
               setAccounts(response)
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
