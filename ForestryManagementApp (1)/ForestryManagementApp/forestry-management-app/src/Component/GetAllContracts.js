import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';

import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contractActions from '../Store/Actions/ContractActions'

class GetAllContractsComponent extends React.Component {
    constructor() {
        super();
        // this.handleDelete=this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.contractActions.fetchAllContracts();
    }
    handleDelete() {
        
        alert("Contract Deleted Succssfully ")
    }

    render() {

        return (
            <div>
                <div><marquee width="100%" direction="right" height="50px" scrollamount="15">
            <h3>Contracts List</h3> </marquee> </div>
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>contractNumber</th>
                            <th>DeliveryPlace</th>
                            <th>DeliverDate</th>
                            <th>Quantity</th>
                            <th>CustomerId</th>
                            <th>Order Number</th>
                            <th>Scheduler Id</th>
                            <th>View</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {this.props.contracts.map(contract =>
                                <tr>
                                    <td>{contract.contractNumber}</td>
                                    <td>{contract.deliveryPlace}</td>
                                    <td>{contract.deliveryDate}</td>
                                    <td>{contract.quantity}</td>
                                    <td>{contract.customer}</td>
                                    <td>{contract.order}</td>
                                    <td>{contract.scheduler}</td>
                                    <td>
                                        <Link to={`/getcontract/${contract.contractNumber}`}>View</Link>
                                    </td>
                                    <td>
                                        <Link to={`/updatecontract/${contract.contractNumber}`}>Update</Link>
                                    </td>
                                    <td>
                                        {/* <Link to={`/deleteorder/${order.OrderNumber}`}>Delete</Link> */}
                                        <Button color="danger"  onClick={() => {this.props.contractActions.deleteContract(contract.contractNumber);alert("Contract deleted successfully with id "+contract.contractNumber);}}>Delete</Button>

                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>
                <Link to={`/addcontract`}>
                <Button color="primary">Create Contract</Button>
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { contracts: state.ContractReducer.contracts }
}

function mapDispatchToProps(dispatch) {
    return {
        contractActions: bindActionCreators(contractActions, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllContractsComponent);