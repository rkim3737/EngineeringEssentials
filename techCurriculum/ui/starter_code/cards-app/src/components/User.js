import React from 'react';

function User(props){
    return (
        <div className='user'>
            <i className="fa fa-user-o"></i> 
              {/* aria-hidden="true"  */}
            <p>{props.name}</p>
            {/** refer to property as props.propertyName */}
        </div>
    );
}

export default User;