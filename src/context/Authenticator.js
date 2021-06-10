import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');

    return (
        <AuthContext.Provider
            value={{
                isLogged,
                setIsLogged,
                user,
                setUser,
                password,
                setPassword,
                firstName,
                setFirstName
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthenticator() {
    const context = useContext(AuthContext);

    const { isLogged, setIsLogged, user, setUser, password, setPassword, firstName, setFirstName } = context;
    return { isLogged, setIsLogged, user, setUser, password, setPassword, firstName, setFirstName  };
}