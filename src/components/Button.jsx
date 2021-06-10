import React from "react"
import "./css/Button.css"

export default (props) => (
    <div>
        <button className="btn-default" onClick={props.action}>{props.text}</button>
    </div>

)


    
