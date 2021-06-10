import React from "react"
import "./css/Home.css"
import Sidebar from "./Sidebar"
import Content from "./Content"
import { ContentManagerProvider } from "../context/ContentManager"

export default (props) => {  
    return (
        <ContentManagerProvider>
            <div>
                <div className="container">
                    <Sidebar/>
                    <Content/>
                </div>
            </div>
        </ContentManagerProvider>
    )
 }