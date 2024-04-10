import React, { useState, useEffect } from "react";
import Button from "../../button/Button";
import AccountView from "../accountView/AccountView";
import AllServices from "../../../services/Services";


const WelcomingUser = () => {
    const [accounts, setAccounts] = useState([]);
    const [appearrance, setAppearance] = useState(true);
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [newName, setNewName] = useState('')
    const [newLastName, setNewLastName] = useState('')


    const toggleEditName = (e) => {
        e.preventDefault()
        if (appearrance ) {
            setAppearance(!appearrance)
        } else {
            setAppearance(!appearrance)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    useEffect(() => {

        const getNameUser = async () => {
    
            try {
                const getUserToken = localStorage.getItem('token')

                const response2 = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method : "POST",
                    headers : {
                        'Authorization': `Bearer ${getUserToken}`
                    }
                });
                
                if(response2) {
                    setName('')
                    setLastName('')
                    const data = await response2.json()
                    setName(data.body.firstName)
                    setLastName(data.body.lastName)
                }
    
            } catch (error) {
                console.log('impossible d\'afficher les noms et prénoms de l\'utilisateur', error);
            }
        }
        getNameUser()
    }, [newName, newLastName])
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await AllServices.getDataBankAccount();
            if (response) {
               setAccounts(response)
            }
        };

        fetchData();
    }, []);

    const handleChangeName = async (e) => {

        e.preventDefault();

        const newName = document.querySelector('#newname').value;
        const newLastName = document.querySelector('#newlastname').value;

        const getUserToken = localStorage.getItem('token')


        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: "PUT",
            headers: {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${getUserToken}`
            },
            body: JSON.stringify({
                firstName : newName,
                lastName : newLastName
            }) 
        })
        
        setNewName(newName);
        setNewLastName(newLastName);
        
    }




    return (
        <section className="userpage">
            <div className="userpage_div">
                <h1 className="userpage_div_title">Welcome Back</h1>
                <h1 className="userpage_div_title">{name} {lastName}</h1>
                
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
                            <span onClick={(e) => handleChangeName(e)}>
                                <Button className="form_edit_part_div_buttons" textContent="Save"  />
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
