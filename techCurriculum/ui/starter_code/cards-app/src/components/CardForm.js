import React from 'react';
import TextInput from './TextInput.js';

// Form
// Input needs to be changed, so use class not just function
class CardForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            message : ''
         }

        // ** methods not bound by default in JS -> without bound, 'undefined'
        // ** if method referred without (), need to bind that method
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    // ** e is synthetic event
    handleSubmit( e ){
        // ** cannot return false like HTML- use preventDefault()
        e.preventDefault(); 
        console.log(this.state);
        this.props.onSubmit( this.state.username, this.state.message );
    }

    // => try to handle both events in one method with event.target
    // => see React doc- Forms
    handleNameChange( val ){
        // ** don't modity state directly
        // ** constructor only place where you can assign "this.state" 
        // ** use setState() instead
        this.setState( { username : val  } );
        // ** there's another form - setState( function(prevState, props) )
    }

    handleMessageChange( val ){
        this.setState( { message : val } );
    }
    
    render(){
        return(
            <div>
                <form className='card-form'>
                    <h2> Add a card </h2>
                    {
                    //** in JSX, pass ftn as event handlers, rather than string in HTML
                    }
                    <TextInput name="username" label="Name"
                        value={this.state.username}
                        onChange={this.handleNameChange}/>  
                    <TextInput name="message" label="Message"
                        value={this.state.message}
                        onChange={this.handleMessageChange}/>
                    <button className="btn btn-primary"
                        onClick={this.handleSubmit}>Submit</button>

                    {/* Name:
                    <input type="name"></input><br/>
                    Message:
                    <input type="message"></input> */}
                </form>
            </div>
        );
    }
}

export default CardForm;