import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../Store/Actions/OrderActions'

class GetOrderByCustomerId extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
        const{
            orderActions,match
           }=this.props;
           orderActions.fetchOrderById(match.params.id);
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
                            <th>Customer Id</th>
                            <th>Product Id</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          this.props.orders.map(order =>
                          <tr>
                          <td>{order.orderNumber}</td>
                          <td>{order.deliveryPlace}</td>
                          <td>{order.deliveryDate}</td>
                          <td>{order.quantity}</td>
                          <td>{order.customerId}</td>
                          <td>{order.product}</td>
                          <td>
                                        <Link to={`/updateorder/${order.orderNumber}`}>Update</Link>
                          </td>
                      </tr>
          
                          )}  
                                
                    </tbody>
                
                </Table>
                :
                <h3>Loading</h3>
                }
                <Link to={`/addorder`}>

<Button color="primary">Create orders</Button>

</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
 
    return { orders: state.OrderReducer.orders }
}  
 
function mapDispatchToProps (dispatch) {
   return {
    orderActions : bindActionCreators(orderActions,dispatch),
      
   }   
};

export default connect(mapStateToProps,mapDispatchToProps) (GetOrderByCustomerId);