import React, { useState } from "react";
import "./css/Login.css"
import Button from "./Button"
import InputText from "./InputText"
import ImgLogo from "../assets/images/logo-tropa.png"
import ImgNotebook from "../assets/images/notebook-computer.png"
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useAuthenticator } from "../context/Authenticator"
import users from "../data/users";

export default (props) => {
    const [passwordType, setPasswordType] = useState('password');
    const [passwordIcon, setPasswordIcon] = useState(faEyeSlash);
    const [message, setMessage] = useState('');
    const { user, setUser, password, setPassword, setIsLogged, setFirstName } = useAuthenticator();

    function handleIconAction() {
        if (passwordType === 'password') {
            setPasswordType('text');
            setPasswordIcon(faEye);
        } else {
            setPasswordType('password');
            setPasswordIcon(faEyeSlash);
        }
    }

    function handleLogin() {
        let accounts = users.filter((account) => account.user === user && account.password === password);

        if (accounts.length) {
            setIsLogged(true);
            setFirstName(accounts[0].name);
        } else {
            setMessage('Usuário ou senha incorreta.');
        }
    }

    function handleOnChangeUser(event) {
        setUser(event.target.value);
    }

    function handleOnChangePassword(event) {
        setPassword(event.target.value);
    }

    return (
        <div className="bg-login">
            <div className="box-login">
                <div className="login-form">
                    <img className="logo" src={ImgLogo}/>
                    <h1>Bem Vindo ao <strong>painel</strong></h1>
                    <InputText type="email" placeholder="Digite seu e-mail" onChange={(event) => handleOnChangeUser(event)} value={user} />
                    <InputText type={passwordType} placeholder="Digite sua senha" onChange={(event) => handleOnChangePassword(event)} value={password} icon={passwordIcon} iconAction={handleIconAction}/>
                    <Button action={handleLogin} text="Acessar"/>
                    <br />
                    <p><strong>{message}</strong></p>
                </div>
                <div className="star-background"></div>
                <img src={ImgNotebook} className="img-notebook"/>
            </div>
        </div>
    )
 }

 