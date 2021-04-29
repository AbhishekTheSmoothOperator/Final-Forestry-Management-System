import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../Store/Actions/OrderActions';

class OrderComponent extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
       const{
        orderActions,match
       }=this.props;
        orderActions.fetchOrderByNumber(match.params.id);
    }
    render() {

        return (
            <div>
                <h3>Order By Number</h3>
                {
                this.props.orders !== undefined ?
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>OrderNumber</th>
                            <th>DeliveryPlace</th>
                            <th>DeliveryDate</th>
                            <th>Quantity</th>
                            <th>CustomerId</th>
                            <th>Products</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          <tr>
                          <td>{this.props.orders.orderNumber}</td>
                          <td>{this.props.orders.deliveryPlace}</td>
                          <td>{this.props.orders.deliveryDate}</td>
                          <td>{this.props.orders.quantity}</td>
                          <td>{this.props.orders.customerId}</td>
                          <td>{this.props.orders.product}</td>
                      </tr>
          
                      }  
                                
                    </tbody>
                
                </Table>
                :
                <h3>Loading</h3>
                };
            </div>
        );
    }
}

function mapStateToProps(state) {
 
    return { orders: state.OrderReducer.order }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      orderActions : bindActionCreators(orderActions,dispatch),
      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (OrderComponent);