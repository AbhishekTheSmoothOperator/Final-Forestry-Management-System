import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import * as orderActions from '../Store/Actions/OrderActions';

class UpdateOrder extends Component {

    constructor(props) {
        super(props);

        this.orderNumber = React.createRef();
        this.deliveryPlace = React.createRef();
        this.deliveryDate = React.createRef();
        this.quantity = React.createRef();
        this.customerId=React.createRef();
        this.updateOrder = this.updateOrder.bind(this);
    }
    componentDidMount() {
        const { orderActions, match } = this.props;
        orderActions.fetchOrderByNumber(match.params.id);
    }

    updateOrder(e) {
        e.preventDefault();

        let payload = {
            orderNumber: this.orderNumber.current.value,
            deliveryPlace: this.deliveryPlace.current.value,
            deliveryDate: this.deliveryDate.current.value,
            quantity : this.quantity.current.value,
            customerId:this.customerId.current.value,
        }

        const { orderActions ,match} = this.props;
        orderActions.updateorder(payload,match.params.id);
        if(this.props.isUpdated===true){
            return alert("Order is updated sucessfully")
        }

    }

    render() {
        const { order } = this.props;

        
       
        return (
            <div>
                {
                    order !== undefined ?

                        <form onSubmit={this.updateOrder}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>Order Number:</label></td>
                                        <td><input defaultValue={order.orderNumber} type="text" ref={this.orderNumber} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Delivery Place:</label></td>
                                        <td><input defaultValue={order.deliveryPlace} type="text" ref={this.deliveryPlace} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Delivery Date:</label></td>
                                        <td><input defaultValue={order.deliveryDate} type="date" ref={this.deliveryDate} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Quantity:</label></td>
                                        <td><input defaultValue={order.quantity} type="text" ref={this.quantity} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Customer Id:</label></td>
                                        <td><input defaultValue={order.customerId} type="text" ref={this.customerId} /></td>
                                    </tr>
                                    <tr>
                                        <td> <input type="submit" value="update"></input></td>
                                        <td><Link to="/"><button>Cancel</button></Link></td>
                                    </tr>
                                </tbody>
                            </table>              
                            
                        </form>
                        :
                        <h2>Loading....</h2>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { 
        order: state.OrderReducer.order,
        isUpdated : state.OrderReducer.isUpdated
     }
}

function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(UpdateOrder);