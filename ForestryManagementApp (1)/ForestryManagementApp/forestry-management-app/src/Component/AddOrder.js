import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as orderActions from '../Store/Actions/OrderActions';
import { Link, Redirect } from 'react-router-dom';


class CreateOrderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orderNumber: '',
            deliveryPlace: '',
            deliveryDate: '',
            quantity: '',
            customerId:'',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createOrder = this.createOrder.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createOrder(e) {
        e.preventDefault();

        let payload = {
            orderNumber: this.state.orderNumber,
            deliveryPlace: this.state.deliveryPlace,
            deliveryDate: this.state.deliveryDate,
            quantity: this.state.quantity,
            customerId:this.state.customerId,
        }

        const { orderActions } = this.props;
        orderActions.createOrder(payload);
        if(this.props.isAdded){
        alert("Order Created Succssfully with number " + payload.orderNumber)
        }

    }

    clear = () => {
        this.setSate = ({
            orderNumber: '',
            deliveryPlace: '',
            deliveryDate: '',
            quantity: '',
            customerId:'',
            // productId:''


        });
    }
    render() {
        return (
            <div>
                <div class="container">
                    <h1>Create Order</h1>
                    <p>Please fill in this  to create a Order.</p>

                    <label>Order Number:</label>
                    <input type="text" placeholder="Order Number" name="orderNumber" id="orderNumber" value={this.state.orderNumber} onChange={this.handleInputChange} required></input>


                    <label>Delivery Place:</label>
                    <input type="text" placeholder="Delivery Place" name="deliveryPlace" id="deliveryPlace" value={this.state.deliveryPlace} onChange={this.handleInputChange}required></input>


                    <label>Delivery Date:</label><br></br>
                    <input type="date" placeholder="Delivery Date" name="deliveryDate" id="deliveryDate" value={this.state.deliveryDate} onChange={this.handleInputChange}required></input><br></br>


                    <label>Quantity:</label>
                    <input type="text" placeholder="Quantity" name="quantity" id="quantity" value={this.state.quantity} onChange={this.handleInputChange}required></input>
                    
                    <label>Customer Id:</label>
                    <input type="text" placeholder="Customer Id" name="customerId" id="customerId" value={this.state.customerId} onChange={this.handleInputChange}required></input>


                    <div class="clearfix">
                        <button type="button" onClick={<Redirect to="/getallorders" />} class="cancelbtn">Cancel</button>
                        <button class="signupbtn" onClick={this.createOrder}>Create Order</button>
                    </div>
                </div>



            </div>);
    }
}

function mapStateToProps(state) {

    return { order: state.OrderReducer.newOrder,
    isAdded:state.OrderReducer.isAdded }
}

function mapDispatchToProps(dispatch) {
    return {
        orderActions: bindActionCreators(orderActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrderComponent);