import React, { useState, useEffect } from "react";
import Button from "../../button/Button";
import AccountView from "../accountView/AccountView";
import AllServices from "../../../services/Services";

const WelcomingUser = () => {
    const [accounts, setAccounts] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await AllServices.getDataBankAccount();
            if (response) {
               setAccounts(response)
            }
        };

        fetchData();
    }, []);

console.log(accounts)

    return (
        <section className="userpage">
            <div className="userpage_div">
                <h1 className="userpage_div_title">Welcome Back</h1>
                <h1 className="userpage_div_title"></h1>
                <Button textContent="Edit Name" className="userpage_div_button" />
                {accounts.map((item, index) => {
                    return <AccountView content={item} index={index} />
                })}
            </div>
        </section>
    );
};

export default WelcomingUser;
