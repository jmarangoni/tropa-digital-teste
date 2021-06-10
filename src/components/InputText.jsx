import React, { useState } from "react"
import "./css/InputText.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (props) => {
    return (
        <div className="input-container">
            <input type={props.type} className="input-text" placeholder={props.placeholder} onChange={props.onChange} value={props.value} />
            <a href="#" onClick={props.iconAction}>
                <FontAwesomeIcon className="input-icon" icon={props.icon}/>
            </a>
        </div>
    )
}