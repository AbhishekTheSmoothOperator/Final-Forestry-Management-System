import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../Store/Actions/CustomerActions'

class GetAllCustomersComponent extends React.Component {
    constructor() {
        super();
        // this.handleDelete=this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.customerActions.fetchAllCustomers();
    }
    render() {

        return (
            <div>
                <div><marquee width="100%" direction="right" height="50px" scrollamount="15">
            <h3>Customers List</h3> </marquee></div>
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>CustomerId</th>
                            <th>CustomerName</th>
                            <th>CustomerEmail</th>
                            <th>CustomerAddress</th>
                            <th>CustomerTown</th>
                            <th>CustomerPostalCode</th>
                            <th>CustomerContact</th>
                            <th>View</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {this.props.customers.map(customer =>
                                <tr>
                                    <td>{customer.customerId}</td>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.customerEmail}</td>
                                    <td>{customer.customerAddress}</td>
                                    <td>{customer.customerTown}</td>
                                    <td>{customer.customerPostalCode}</td>
                                    <td>{customer.customerContact}</td>
                                    <td>
                                        <Link to={`/getcustomer/${customer.customerId}`}>View</Link>
                                    </td>
                                    <td>
                                        <Link to={`/updatecustomer/${customer.customerId}`}>Update</Link>
                                    </td>
                                    <td>
                                        {/* <Link to={`/deletecustomer/${customer.customerId}`}>Delete</Link> */}
                                        <Button color="danger"  onClick={() => {this.props.customerActions.deleteCustomer(customer.customerId);alert("Customer deleted successfully with id "+customer.customerId);}}>Delete</Button>

                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>
                <Link to={`/addcustomer`}>
                <Button color="primary">Create customer</Button>
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { customers: state.CustomerReducer.customers }
}

function mapDispatchToProps(dispatch) {
    return {
        customerActions: bindActionCreators(customerActions, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllCustomersComponent);