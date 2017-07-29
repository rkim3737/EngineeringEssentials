import React from 'react';

import User from "./User.js";
import Message from "./Message.js";

function Card(props){

    return (
        // ** className not class, since class is reserved name in JS
        // ** when JSX rendered, className auto rendered as class attrib.
        <div className='card'>  
            <User name={props.author}/>
            <div className='card-main'>
                <Message message={props.text}/>
            </div>
            <br/> 
        </div>
        // ** self-closing tag for JSX needs the slash, so <br/> not just <br>
    )

};

export default Card;