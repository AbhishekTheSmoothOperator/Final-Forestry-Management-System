import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../Store/Actions/OrderActions';

class GetAllOrdersComponent extends React.Component {
    constructor() {
        super();
        // this.handleDelete=this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.orderActions.fetchAllOrders();
    }
    // handleDelete() {
        
    //     alert("Order Deleted Succssfully ")
    // }

    render() {

        return (
            <div>
               <div><marquee width="100%" direction="right" height="50px" scrollamount="15">
            <h3>Orders List</h3> </marquee></div>
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>OrderNumber</th>
                            <th>DeliveryPlace</th>
                            <th>DeliverDate</th>
                            <th>Quantity</th>
                            <th>CustomerId</th>
                            <th>Products</th>
                            <th>View</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {this.props.orders.map(order =>
                                <tr>
                                    <td>{order.orderNumber}</td>
                                    <td>{order.deliveryPlace}</td>
                                    <td>{order.deliveryDate}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.customerId}</td>
                                    <td>{order.product}</td>
                                    <td>
                                        <Link to={`/getorder/${order.orderNumber}`}>View</Link>
                                    </td>
                                    
                                </tr>
                            )}
                    </tbody>
                </Table>    
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { orders: state.OrderReducer.order }
}

function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllOrdersComponent);