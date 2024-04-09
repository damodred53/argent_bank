
import React from "react";
import Utilisateur from "../../assets/utilisateur.svg";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormAuthentification = () => {

    const navigate = useNavigate();


    const handleSubmit = async (e) => {

    console.log('click');
    e.preventDefault();

        const formData= {}
    
        const userMail  = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        formData.email = userMail
        formData.password = password
        
        console.log(formData)

        const postData = await fetch('http://localhost:3001/api/v1/user/login', {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : formData.email,
                password: formData.password
            })
        });

        if (postData.ok) {
            const data = await postData.json();
            console.log(data)
            localStorage.setItem('token', data.body.token)
            navigate('/profile')
        }
    }


    return (
        <section className="form_area">

            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <img className="form_picture" src={Utilisateur} alt="logo utilisateur"/>
                <h2 className="form_title">Sign In</h2>
                <div >

                    <div className="form_div_wrapper">
                        <label className="form_div_wrapper_label" htmlFor="username">Username</label>
                        <input className="form_div_wrapper_input" id="username"  type='text'></input>
                    </div>

                    <div className="form_div_wrapper">
                        <label className="form_div_wrapper_label" htmlFor="password">Password</label>
                        <input className="form_div_wrapper_input password" id="password" type='text'></input>
                    </div>

                    <div className="form_div_wrapper_remember">
                        <input className="form_div_wrapper_checkbox" type="checkbox"/>
                        <label className="form_div_wrapper_checkbox">Remember me</label>
                    </div>

                    
                        <Button textContent='Sign In' className="form_button" />
                    

                </div>
            </form>
        </section>

    )
}

export default FormAuthentification;