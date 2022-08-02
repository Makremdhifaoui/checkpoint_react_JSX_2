import React from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub, faLinkedin,faTwitterSquare ,fab} from '@fortawesome/free-brands-svg-icons' 

const Adress = ()=> {
    return (
        <div className='add'>
            <h3> My Adress : Sahloul Sousse 4054</h3>
            <FontAwesomeIcon style={{margin:"10px"}} icon={faFacebook} />
            <FontAwesomeIcon style={{margin:"10px"}} icon={faGithub} />
            <FontAwesomeIcon style={{margin:"10px"}} icon={faLinkedin} />
            <FontAwesomeIcon style={{margin:"10px"}} icon={faTwitterSquare} />
            <FontAwesomeIcon style={{margin:"10px"}} icon={fab} />
        
            <p><button>Contact</button></p>
        </div>
    )
}
export default Adress