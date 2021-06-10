import React from "react"
import "./css/Sidebar.css"
import SidebarMenu from "./SidebarMenu"
import ImgLogo from "../assets/images/logo-tropa.png"

export default (props) => {

    return (
        <div>
            <div className="sidebar">
                <img className="logo-home" src={ImgLogo}/>
                <SidebarMenu/>
            </div>
        </div>
    )
}