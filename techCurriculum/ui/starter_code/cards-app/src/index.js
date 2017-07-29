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
import ReactDOM from 'react-dom';
import '../stylesheet.css';
import App from "./App.js";
// import Title from "./components/Title.js"; // Ex 1.1

// ** .render() takes two params
// ** first parameter should be single root element 
// ** -encasing tag (like <div>) that encloses all else
// Ex 1.1
// var text =  (<div><h1>Cards</h1> <h3>Share your ideas</h3></div>);
// ReactDOM.render(
//     text,
//     document.getElementById('root')
// );

// Ex 2.1
// ReactDOM.render(
//   <Title/>,
//   document.getElementById('root')
// )

// Ex 2.2-
// ** Virtual DOM
// ** ReactDOM.render() only updates DOM elements that have been changed 
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);