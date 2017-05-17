import React from 'react';

import User from "./User.js";
import Message from "./Message.js";

function Card(props){
    return (
        <div className='card'>  
            <User name={props.author}/>
            <div className='card-main'>
                <Message message={props.text}/>
            </div>
        </div>
    )
};

export default Card;