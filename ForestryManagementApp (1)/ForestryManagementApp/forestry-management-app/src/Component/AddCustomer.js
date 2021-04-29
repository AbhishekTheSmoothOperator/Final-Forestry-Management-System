import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../Store/Actions/CustomerActions';
import { Link, Redirect } from 'react-router-dom';


class CreateCustomerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customerId: '',
            customerName: '',
            customerPassword: '',
            customerEmail: '',
            customerAddress: '',
            customerTown: '',
            customerPostalCode: '',
            customerContact: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createCustomer(e) {
        e.preventDefault();

        let payload = {
            customerId: this.state.customerId,
            customerName: this.state.customerName,
            customerPassword: this.state.customerPassword,
            customerEmail: this.state.customerEmail,
            customerAddress: this.state.customerAddress,
            customerTown: this.state.customerTown,
            customerPostalCode: this.state.customerPostalCode,
            customerContact: this.state.customerContact

        }

        const { customerActions } = this.props;
        customerActions.createCustomer(payload);
        if(this.props.isAdded===true){
        alert("Customer Created Succssfully with id " + payload.customerId)
        }

    }

    clear = () => {
        this.setSate = ({
            customerId: '',
            customerName: '',
            customerPassword: '',
            customerEmail: '',
            customerAddress: '',
            customerTown: '',
            customerPostalCode: '',
            customerContact: ''

        });
    }
    render() {
        return (
            <div>
                <div class="container">
                    <h1>Create Customer</h1>
                    <p>Please fill in this  to create a Customer.</p>

                    <label>Customer Id:</label>
                    <input type="text" placeholder="Customer Id" name="customerId" id="customerId" value={this.state.customerId} onChange={this.handleInputChange}></input>


                    <label>Customer Name:</label>
                    <input type="text" placeholder="Customer Name" name="customerName" id="customerName" value={this.state.customerName} onChange={this.handleInputChange}></input>

                    <label>Customer Passowrd:</label>
                    <input type="password" placeholder="Customer Password" name="customerPassword" id="customerPassword" value={this.state.customerPassword} onChange={this.handleInputChange}></input>


                    <label>Customer Email:</label>
                    <input type="text" placeholder="Customer Email" name="customerEmail" id="customerEmail" value={this.state.customerEmail} onChange={this.handleInputChange}></input>

                    <label>Customer Address:</label>
                    <input type="text" placeholder="Customer Address" name="customerAddress" id="customerAddress" value={this.state.customerAddress} onChange={this.handleInputChange}></input>

                    <label>Customer Town:</label>
                    <input type="text" placeholder="Customer Town" name="customerTown" id="customerTown" value={this.state.customerTown} onChange={this.handleInputChange}></input>

                    <label>Customer PostalCode:</label>
                    <input type="text" placeholder="Customer PostalCode" name="customerPostalCode" id="customerPostalCode" value={this.state.customerPostalCode} onChange={this.handleInputChange}></input>

                    <label>Customer Contact:</label>
                    <input type="text" placeholder="Customer Contact" name="customerContact" id="customerContact" value={this.state.customerContact} onChange={this.handleInputChange}></input>


                    <div class="clearfix">
                        <button type="button" onClick={<Redirect to="/getallcustomers" />} class="cancelbtn">Cancel</button>
                        <button class="signupbtn" onClick={this.createCustomer}>Create Contract</button>
                    </div>
                </div>



            </div>);
    }
}

function mapStateToProps(state) {

    return { customer: state.CustomerReducer.newCustomer,
    isAdded:state.CustomerReducer.isAdded }
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomerComponent);