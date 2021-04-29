import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SchedulerActions from '../Store/Actions/SchedulerActions';

class GetAllSchedulerComponent extends React.Component {
    constructor() {
        super();
        // this.handleDelete=this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.SchedulerActions.fetchAllSchedulers();
    }
    handleDelete() {
        
        alert("Scheduler Deleted Succssfully! ")
    }

    render() {

        return (
            <div>
                <div><marquee width="100%" direction="right" height="50px"bgcolor="cyan" scrollamount="15">
                <h3>Scheduler List</h3> </marquee></div>
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>Scheduler Id</th>
                            <th>Scheduler Name</th>
                            <th>Scheduler Contact</th>
                            <th>Truck Number</th>
                            <th>Order Id</th>
                            <th>View</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {this.props.schedulers.map(scheduler =>
                                <tr>
                                    <td>{scheduler.schedulerId}</td>
                                    <td>{scheduler.schedulerName}</td>
                                    <td>{scheduler.schedulerContact}</td>
                                    <td>{scheduler.truckNumber}</td>
                                    <td>{scheduler.orderNumber}</td>
                                    <td>
                                        <Link to={`/getscheduler/${scheduler.schedulerId}`}>View</Link>
                                    </td>
                                    <td>
                                        <Link to={`/updatescheduler/${scheduler.schedulerId}`}>Update</Link>
                                    </td>
                                    <td>
                                        {/* <Link to={`/deleteorder/${order.OrderNumber}`}>Delete</Link> */}
                                        <Button color="danger"  onClick={() => {this.props.SchedulerActions.deleteScheduler(scheduler.schedulerId);alert("Scheduler deleted successfully with id "+scheduler.schedulerId);}}>Delete</Button>

                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>
                <Link to={`/addscheduler`}>
                <Button color="primary">Create Scheduler</Button>
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { schedulers: state.SchedulerReducer.schedulers }
}

function mapDispatchToProps(dispatch) {
    return {
        SchedulerActions: bindActionCreators(SchedulerActions, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllSchedulerComponent);