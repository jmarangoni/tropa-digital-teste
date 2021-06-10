import React from "react"
import "./css/Content.css"
import { useAuthenticator } from "../context/Authenticator"
import { useContentManager } from "../context/ContentManager"
import StartContent from "./StartContent"
import ContactContent from "./ContactContent"
import ReportContent from "./ReportContent"
import ClientContent from "./ClientContent"
import ProductContent from "./ProductContent"
import SaleContent from "./SaleContent"

export default (props) => {  
    const { firstName } = useAuthenticator();
    const { page } = useContentManager();

    function renderSwitch(page) {
        switch(page) {
            case 'start':
                return <StartContent/>;
            case 'contacts':
                return <ContactContent/>;
            case 'reports':
                return <ReportContent/>;
            case 'clients':
                return <ClientContent/>;
            case 'products':
                return <ProductContent/>;
            case 'sales':
                return <SaleContent/>;
            default:
                return <StartContent/>;
        }
      }

    return (
        <div className="content">
            <h1>Olá {firstName}</h1>
            <div className="hr"/>
            {renderSwitch(page)}
        </div>
    )
 }