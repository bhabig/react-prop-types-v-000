import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Order extends React.Component {

  render() {
    return (
      <div className="order">
        <ul>
          <li>{this.props.cone ? 'Cone' : 'Cup'}</li>
          <li>{this.props.size}</li>
          <li>{this.props.scoops.length} scoops: {this.props.scoops.join(', ')}</li>
          <li>Ordered by {this.props.orderInfo.customerName} at {this.props.orderInfo.orderedAt}.</li>
        </ul>
      </div>
    );
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
};

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired // We're using UNIX timestamps here
  }).isRequired
};

const order = { customerName: 'Bob', orderedAt: new Date() };

ReactDOM.render(
  <Order
    orderInfo={order}
    cone='false'
    size='large'
    scoops={['blue', 'green', 'purple', 'yellow', 'blue', 'purple', 'red']}
  />,
  document.getElementById('root')
);
