var React = require('react');
var ListItem = require('./ListItem.jsx');
var PropTypes = React.PropTypes;
var ingredients = [{
                    "id":1,
                    "text":"Meat"
                    },{
                      "id":2,
                      "text":"Cheese"
                    },{
                      "id":3,
                      "text":"Potatoes"
                    }];

var List = React.createClass({
  render: function() {
      var listItems = ingredients.map(function(item){
        return <ListItem key={item.id} newID={item.id} ingredient={item.text} />;
      });
      return (<ul>{listItems}</ul>);
  }
});

module.exports = List;
