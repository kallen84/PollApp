/******************************************************** 
This is our display-component the will wrap around a 
group of children and display them based upon the condition
that we send to the component as a property. This will
be used in our Audience.js file
********************************************************/

var React = require('react');

var Display = React.createClass({

    render: function() {
      return (this.props.if) ? <div>{this.props.children}</div> : null;

    }

})
module.exports = Display;
