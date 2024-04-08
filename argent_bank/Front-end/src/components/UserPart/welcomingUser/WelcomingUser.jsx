import React, { useState, useEffect } from "react";
import Button from "../../button/Button";
import AccountView from "../accountView/AccountView";
import AllServices from "../../../services/Services";


const WelcomingUser = () => {
    const [accounts, setAccounts] = useState([]);
    const [appearrance, setAppearance] = useState(true)


    const toggleEditName = () => {
        
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
                <h1 className="userpage_div_title"></h1>
                
                    {appearrance ? 
                    <span className="test_span" onClick={toggleEditName}>
                        <Button textContent="Edit Name" className="userpage_div_button" />
                    </span>
                    :
                    <div className="form_edit">
                    <form className="form_edit_part" onSubmit={handleSubmit}>
                        <div className="form_edit_part_div">
                            <input className="form_edit_part_div_input" type="text" />
                            <input className="form_edit_part_div_input" type="text" />
                        </div>
                        <div className="form_edit_part_div_buttons">
                            <Button className="form_edit_part_div_buttons" textContent="Save" />
                            <Button className="form_edit_part_div_buttons" textContent="Cancel" />
                        </div>
                    </form>
                    <span className="test_span" onClick={toggleEditName}>
                        <Button textContent="Edit Name" className="userpage_div_button" />
                    </span>
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
