import React from "react"
import "./css/Card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import cardPic from "../assets/images/card-pic.png"

export default (props) => {  
    return (
        <div className="card">
            <div className="card-img">
                <div className="card-date">
                    <FontAwesomeIcon icon={faCalendar}/>
                    <div className="time-label">2min atrás</div>
                </div>
                <img src={cardPic} className="img"/>
            </div>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesettin...</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesettin.</p>
        </div>
    ) 
 }