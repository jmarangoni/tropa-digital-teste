import react from "react";
import "./App.css"
import Auth from "./components/Auth"
import { AuthProvider } from "./context/Authenticator"

export default (props) => {
    return (
        <AuthProvider>
            <div className="App">
                <Auth/>
            </div>
        </AuthProvider>
    
    )
}

