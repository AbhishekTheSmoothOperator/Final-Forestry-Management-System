import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import * as customerActions from '../Store/Actions/CustomerActions';

class CustomerUpdateById extends Component {

    constructor(props) {
        super(props);

        this.customerId = React.createRef();
        this.customerName = React.createRef();
        this.customerEmail = React.createRef();
        this.customerAddress = React.createRef();
        this.customerTown = React.createRef();
        this.customerPostalCode = React.createRef();
        this.customerContact = React.createRef();
        this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount() {
        const { customerActions, match } = this.props;
        customerActions.fetchCustomerById(match.params.id);
    }

    updateCustomer(e) {
        e.preventDefault();

        let payload = {
            customerId: this.customerId.current.value,
            customerName: this.customerName.current.value,
            customerEmail: this.customerEmail.current.value,
            customerAddress : this.customerAddress.current.value,
            customerTown : this.customerTown.current.value,
            customerPostalCode : this.customerPostalCode.current.value,
            customerContact : this.customerContact.current.value
        }

        const { customerActions ,match} = this.props;
        customerActions.updateCustomer(payload,match.params.id);


    }

    render() {
        const { customer,isUpdated } = this.props;

        
        return (
            <div>
                {
                    customer !== undefined ?

                        <form onSubmit={this.updateCustomer}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>Customer Id:</label></td>
                                        <td><input defaultValue={customer.customerId} type="text" ref={this.customerId} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Name:</label></td>
                                        <td><input defaultValue={customer.customerName} type="text" ref={this.customerName} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Email:</label></td>
                                        <td><input defaultValue={customer.customerEmail} type="text" ref={this.customerEmail} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Address:</label></td>
                                        <td><input defaultValue={customer.customerAddress} type="text" ref={this.customerAddress} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Town:</label></td>
                                        <td><input defaultValue={customer.customerTown} type="text" ref={this.customerTown} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>PostalCode:</label></td>
                                        <td><input defaultValue={customer.customerPostalCode} type="text" ref={this.customerPostalCode} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Contact:</label></td>
                                        <td><input defaultValue={customer.customerContact} type="text" ref={this.customerContact} /></td>
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
        customer: state.CustomerReducer.customer,
        isUpdated : state.CustomerReducer.isUpdated
     }
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch)
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(CustomerUpdateById);