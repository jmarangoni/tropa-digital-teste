import React from 'react';
import Login from "./Login"
import Home from "./Home"
import { useAuthenticator } from "../context/Authenticator"

export default (props) => {
    const { isLogged } = useAuthenticator();
    
    return (
        <>
            {!isLogged ? <Login/> : <Home/> }
        </>
    )
}