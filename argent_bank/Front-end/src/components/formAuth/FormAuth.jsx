
import React from "react";
import Utilisateur from "../../assets/utilisateur.svg";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import Services from "../../services/Services.jsx";

const FormAuthentification = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formData= {}
    
        const userMail  = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        formData.email = userMail
        formData.password = password

        const postData = await Services.loginUser(formData)
        
        const nameError = document.querySelector('.form_div_wrapper_username_error');
        const lastNameError = document.querySelector('.form_div_wrapper_password_error');

        if (postData.ok) {

            if (nameError.style.display === "block" || lastNameError.style.display === "block") {
                nameError.style.display = "none";
                lastNameError.style.display = "none";
            }
            const data = await postData.json();
            localStorage.setItem('token', data.body.token)
            navigate('/profile')
        } else {
            nameError.style.display = "block";
            lastNameError.style.display = "block";
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
                        <p className="form_div_wrapper_username_error">Le nom d'utilisateur est incorrect, veuillez reessayer</p>
                    </div>

                    <div className="form_div_wrapper">
                        <label className="form_div_wrapper_label" htmlFor="password">Password</label>
                        <input className="form_div_wrapper_input password" id="password" type='text'></input>
                        <p className="form_div_wrapper_password_error">Le mot de passe est incorrect, veuillez reessayer</p>
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