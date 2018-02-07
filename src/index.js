import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Order extends React.Component {
  render() {
    return (
      <div>
        <h1>Order For:</h1>
        <h2>{this.props.orderInfo.customerName}</h2>
        <h3>Flavors:</h3>
        <ul>{
          this.props.scoops.length > 0 ?
            this.props.scoops.map(flav => <li>{flav}</li>) :
            <p>You don't know how to order Ice Cream...</p>
        }</ul>

        <h3>{this.props.cone ? "Cone" : "Bowl"} [{this.props.size}]</h3>
        <h4>Other Info: {this.props.orderInfo.toppings}</h4>
        <p>Ordered On: {this.props.orderInfo.orderedAt}</p>
      </div>
    )
  }
}

Order.defaultProps = {
  cone: true,
  size: 'Regular',
}

Order.propTypes = {
  cone: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['Small', 'Regular', 'Large', 'Extra-Large']),
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    toppings: PropTypes.string,
    orderedAt: PropTypes.string,
  })
}

ReactDOM.render(
  <Order cone={true} size="Extra-Large" scoops={['Vanilla', 'Cookie Dough', 'Vanilla', 'Cookie Dough']} orderInfo={{customerName: "Bob", toppings: "tons of whipped cream!!!", orderedAt: new Date(Date.now()).toLocaleString()}}/>,
  document.getElementById('root')
)
