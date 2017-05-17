import React from 'react';

function Message(props){
    return (
        <div className='message-text'>
            <p>{props.message}</p>
        </div>
    )
};

export default Message;