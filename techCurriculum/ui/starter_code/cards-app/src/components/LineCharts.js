import React from 'react';
import Highcharts from 'highcharts';

class LineCharts extends React.Component{
    constructor(props){
        super(props);
        this.highchartsOptions = {
            title: { text: "Posts Per Month"},
            xAxis: { 
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']},
            yAxis: { title: {
                text: "Number of Posts"}
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

    componentDidMount(){
        Highcharts.chart('chart', this.highchartsOptions);
    }

    render(){
        return(
            <div id="chart"></div>
        )
    }

}

export default LineCharts;