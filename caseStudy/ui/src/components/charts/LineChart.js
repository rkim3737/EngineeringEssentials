import React from 'react';
import Highcharts from 'highcharts';

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            stocks : { dailyClosePrice : [ 
                // 3/15/2017: 210.08,
                // 4/6/2017: 235.08,
                // 4/21/2017: 243.61,
                // 2/16/2017: 205.43,
                // 2/20/2017: 207.68
            ] }
            
        }
        
        this.highchartsOptions = {
            title: { text: "Stock Price"},
            xAxis: { 
                title : { text : "Date"},
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']},
            yAxis: { title: {
                text: "Price"}
            },
            series: [
                {
                    name: "John",
                    marker: {
                        symbol: 'square'
                    },
                    data: props.dataOne 
                },{
                    name: "Jane",
                    marker: {
                        symbol: 'diamond'
                    },
                    data: props.dataTwo
                }
            ]
        }
    }

    componentDidMount() {
        Highcharts.chart('chart', {

            // TODO
            // Create a highcharts line chart of your choosing 
            // (e.g. https://www.highcharts.com/demo/line-time-series for a demo).

            series: [{
                name: 'Prices',
                data: this.props.data
            }]
        });

    }

    componentWillReceiveProps(props) {
        console.log("New data received to redraw chart.");
        
        /**
         * TODO
         * Parse the data received from props, a Javascript object, to map to a Javascript array
         * required by the type of line chart chosen and set it in the series. Use Date.UTC(..)
         * to create the x-axis.
         */

    //   var date = this.state.stocks.map((stock, index ) => (
    //       stocks.dailyClosePrice[0].keys()
    //   ))

    //   var data = [];
    //   for (var company in stocks[0].dailyClosePrice ){
    //     var time = company.keys;
    //     var arr = time.split("/");
    //     data.push([ "Date.UTC(" + time[2] + "," + time[0] + "," + time[1] + ")", company[time]])
    //   }

    //   console.log(data);
      
        /**
         * TODO
         * Uncomment the line below to pass the data be displayed to the series
         * this.chart.series[0].setData(data);
         */
    }

    componentWillUnmount() {
        this.chart.destroy();
    }


    render() {
        return (
            <div id='chart'></div>
        )
    }
}

// Don't forget to export your component!
export default LineChart;