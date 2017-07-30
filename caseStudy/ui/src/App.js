import React from 'react';
import StockTicker from './components/StockTicker.js';
import LineChart from './components/charts/LineChart.js';
import './style/App.css';
import CompanyData from './components/data/companyInfo.json';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            /**
             * TODO
             * Add state objects for the user inputs and 
             * anything else you may need to render the highchart.
             */
            company : {
                symbol:"",
                name:"",
                city:"",
                stateCountry:"",
                sector:"",
                industry:""
            }
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange( companyName ){
        // find company in list of company
        var co = null;
        for(var i = 0; i < CompanyData.length; i++ ){
            if( CompanyData[i].name === companyName )
                co = CompanyData[i];
        }

        console.log(co);

        this.setState(
            {
                company : {
                    symbol: co.symbol,
                    name: co.name,
                    city: co.headquartersCity,
                    stateCountry: co.headquartersStateOrCountry,
                    sector: co.sector,
                    industry: co.industry
                }
            }
        )
    }

    render () {
      return (
          <div className="page-display">
            {/**
            * TODO
            * Render the StockTicker and Date components. You can use the date component twice
            * for both the start and end dates.
            * Add onChange props to the StockTicker and both Date components.
            * These props methods should set state and help determine if the
            * highchart should be displayed by changing the state of that boolean.
            * Don't forget to bind these methods!
            */}
            <StockTicker name={this.state.company.name} symbol={this.state.company.symbol} 
                    city={this.state.company.city} stateCountry={this.state.company.stateCountry}
                    sector={this.state.company.sector} industry={this.state.company.industry} 
                    onChange={this.handleChange /** need this to detect and receive onChange from StockTicker.js */}/> 
            
            {/**
            *  TODO
            *  Create a div element that shows a highchart when the ticker, start date, end date
            *  states ALL have values and nothing (null) otherwise. You will need to use a conditional here
            *  to help control rendering and pass these states as props to the component. This conditional can
            *  be maintained as a state object.
            *  http://reactpatterns.com/#conditional-rendering
            */}
            <LineChart symbol={this.state.company.symbol }/> 
          </div>
      );
    }
}

export default App;
