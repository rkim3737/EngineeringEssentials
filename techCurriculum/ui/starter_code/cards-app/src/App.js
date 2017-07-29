/**
* Copyright 2017 Goldman Sachs.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
**/

import React from 'react';
import Title from "./components/Title.js";
import Card from "./components/Card.js";
import CardForm from "./components/CardForm.js";
// import User from "./components/User.js";
// import Message from "./components/Message.js";
// import JohnData from "./data/john_posts.json";

// Ex 2.2 - 3.3
// function App(){
//     return (
//         // Remember, first param of render() must be single root element
//         <div>
//             <Title/>
//             {
//             // <User name="John Smith"/>
//             // <Message message="React is so cool!"/>  
//             }
//             <Card author="John Smith"
//                 text="React is so cool!"/> 
//             <Card author="Jane Doe"
//                 text="Node is so cool!"/> 
//         </div>
//     );
// }
// ** All components must act like pure functions with regard to their props
// ** -can't alter the props ==> see the concept "State"


// ** State- similar to props but is private and fully controlled by component
// Ex 4.1
class App extends React.Component {
    // if subclass has consturcotr,
    // it must first call super() before using "this"
    constructor(props){
        // superclass "React.Component" constructor 
        super(props);

        // class constructor 
        this.state = {
            cards: [
                {
                    author : "John Smith", 
                    text : "React is cool"
                }, {
                    author : "Jane Doe", 
                    text : "Node is cool"
                }, {
                    author : "Chuck Norris", 
                    text : "JS is cool"
                }
            ],
            
            anotherProp: "sldkjf",
            otherProp: "weruioj"
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit( name, message ){
        const newCard = { author : name, text : message };
        const updatedCards = [ ...this.state.cards, newCard ];
        this.setState( { cards: updatedCards} );
    }

    render(){
        // var newArr = arr.map( function(currVal, index){ 
        //    return element for newArr } )
        var cards = this.state.cards.map( (card, index) => (
            <Card author={card.author}
                    text={card.text}
                    key={index}/>          
            ) 
        );

        return (
            <div id='app_body'>
                <div id='left-panel'>
                    <Title/>
                    {cards}
                </div>
                <CardForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }

}

export default App;
