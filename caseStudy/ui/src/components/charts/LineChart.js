import React from 'react';
import Highcharts from 'highcharts';
import StockData from './historicalStockData.json';

class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : [
                [Date.UTC(2013,5,2),0.7695],
                [Date.UTC(2013,5,3),0.7648],
                [Date.UTC(2013,5,4),0.7645],
                [Date.UTC(2013,5,5),0.7638],
                [Date.UTC(2013,5,6),0.7549]
            ]
        }

        
        this.highchartsOptions = {
            chart: {
                zoomType: 'x'
            },
            title: { text: "Stock Price"},
            subtitle: { text: "Click and drag in plot to zoom in"},
            xAxis: { 
                title : { text : "Date"},
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%d %b %Y'    //ex- 01 Jan 2016
                }
            },
            yAxis: { title: {
                text: "Price"}
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                type: 'area',
                name: '$',
                data: []
            }]
        }

        this.chart = undefined;
        //29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4

        // this.componentDidMount = this.componentDidMount.bind(this);
        // this.componentWillMount = this.componentWillMount.bind(this);   
    }

    // componentWillMount(){
    componentDidMount() {
        this.chart = Highcharts.chart('chart', this.highchartsOptions);
        
        // {

        //     // TODO
        //     // Create a highcharts line chart of your choosing 
        //     // (e.g. https://www.highcharts.com/demo/line-time-series for a demo).

        //     series: [{
        //         symbol: this.props.symbol,
        //         data: "some ticks"
        //     }]
        // });

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
        
        // Get symbol from App.js
        var symbol = props.symbol;
        // var compData = null;

        // console.log(symbol);

        // Find the right stock data from StockData
        // This is taking a really long time- need better algo
        // while( compData == null ){
        //     var i = 0;
        //     if( StockData[i].name === symbol )
        //         compData = StockData[i];
        //     i++;
        // }

        var compData = {
            name : "ATVI",
            dailyClosePrice: [
            {
                "3/15/2017": 210.08,
                "4/6/2017": 235.08,
                "4/21/2017": 243.61,
                "2/16/2017": 205.43,
                "2/20/2017": 207.68,
                "4/3/2017": 242.38,
                "5/1/2017": 238.49,
                "3/8/2017": 235.57,
                "5/5/2017": 262.78,
                "4/4/2017": 231.23,
                "3/2/2017": 213.77,
                "3/17/2017": 199.43,
                "4/28/2017": 248.97,
                "4/20/2017": 226.41,
                "2/1/2017": 245.97,
                "4/25/2017": 264.28,
                "3/30/2017": 222.98,
                "3/16/2017": 199.43,
                "2/10/2017": 237.4,
                "3/29/2017": 235.45,
                "2/3/2017": 218.15,
                "3/13/2017": 224.29,
                "4/24/2017": 253.94,
                "3/27/2017": 218.32,
                "4/27/2017": 264.61,
                "4/19/2017": 237.9,
                "3/31/2017": 242.38,
                "3/14/2017": 210.08,
                "2/7/2017": 253.35,
                "2/17/2017": 192,
                "4/10/2017": 235.08,
                "4/13/2017": 213.72,
                "2/21/2017": 207.68,
                "3/6/2017": 216.7,
                "4/18/2017": 219.9,
                "2/13/2017": 237.4,
                "2/23/2017": 226.71,
                "2/15/2017": 220.55,
                "3/7/2017": 235.57,
                "4/17/2017": 230.46,
                "3/24/2017": 218.32,
                "2/8/2017": 242.83,
                "3/1/2017": 225.34,
                "2/27/2017": 225.34,
                "2/2/2017": 235.07,
                "4/11/2017": 215.31,
                "4/14/2017": 213.72,
                "4/26/2017": 251.53,
                "3/3/2017": 196.94,
                "5/2/2017": 250.39,
                "3/23/2017": 199.5,
                "2/6/2017": 236.29,
                "2/9/2017": 254.15,
                "4/5/2017": 247.33,
                "3/10/2017": 235.84,
                "3/9/2017": 222.94,
                "4/12/2017": 233.41,
                "4/7/2017": 235.08,
                "5/3/2017": 232.79,
                "3/21/2017": 203.95,
                "2/28/2017": 225.34,
                "3/22/2017": 187.26,
                "2/24/2017": 244.82,
                "2/22/2017": 207.68,
                "3/28/2017": 235.45,
                "2/14/2017": 220.55,
                "5/4/2017": 243.86,
                "3/20/2017": 187.99
            }
        ]}

        var allStock = compData.dailyClosePrice[0];
        // console.log(allStock);

        // Format to Date.UTC(year, month, day) and setState(data)
        var d = [];
        for( var time in allStock ){
            // console.log("time " +  time);
            var arr = time.split("/");
            // console.log( arr);
            d.push( [ "Date.UTC(" + arr[2] + "," + arr[0] + "," + arr[1] + ")", allStock[time] ] );
        }

        // console.log(d);

        // this.highchartsOptions.series[0].setData(d);
        this.setState( {data: d} );
        console.log(this.state);

        /**
         * TODO
         * Uncomment the line below to pass the data be displayed to the series
         * this.chart.series[0].setData(data);
         */
        this.chart.series[0].setData(d);
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