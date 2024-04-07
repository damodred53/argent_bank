
import React from "react";
import Utilisateur from "../../assets/utilisateur.svg";

const FormAuthentification = () => {




    return (
        <section className="form_area">

            <form className="form">
                <img className="form_picture" src={Utilisateur} alt="logo utilisateur"/>
                <h2 className="form_title">Sign In</h2>
                <div >

                    <div className="form_div_wrapper">
                        <label className="form_div_wrapper_label" for="username">Username</label>
                        <input className="form_div_wrapper_input" id="username"  type='text'></input>
                    </div>

                    <div className="form_div_wrapper">
                        <label className="form_div_wrapper_label" for="password">Password</label>
                        <input className="form_div_wrapper_input" id="password" type='text'></input>
                    </div>

                    <div className="form_div_wrapper_remember">
                        <input className="form_div_wrapper_checkbox" type="checkbox"/>
                        <label className="form_div_wrapper_checkbox">Remember me</label>
                    </div>

                    <button className="form_button">Sign In</button>

                </div>
            </form>
        </section>

    )
}

export default FormAuthentification;