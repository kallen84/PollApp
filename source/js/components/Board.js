var React = require('react');
var BarChart = require('react-d3').BarChart;

var Board = React.createClass({
    getBarGraphData: function (results) {
        return [{
            values: Object.keys(results).map(function (choice) {
                return { x: choice, y: results[choice] }


                //  return {
                //          label:choice
                //          ,value:results[choice]
                //  }
            })
        }]

    }
    , render: function () {

        return (
            <div>
                <h2> {this.props.currentQuestion && this.props.currentQuestion.q} </h2>
                <BarChart data={this.getBarGraphData(this.props.results)} 
                      
                        height={window.innerHeight * 0.6}
                        width={window.innerWidth * 0.9}
                         />
            </div>
        )

    }

})
module.exports = Board;
