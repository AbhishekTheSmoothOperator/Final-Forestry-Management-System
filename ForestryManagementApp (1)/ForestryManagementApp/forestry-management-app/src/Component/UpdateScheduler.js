import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import * as schedulerActions from '../Store/Actions/SchedulerActions';

class UpdateSchedulerById extends Component {

    constructor(props) {
        super(props);

        this.schedulerId = React.createRef();
        this.schedulerName = React.createRef();
        this.schedulerContact = React.createRef();
        this.truckNumber = React.createRef();
        this.orderNumber = React.createRef();//foreign key
        this.updateScheduler = this.updateScheduler.bind(this);
    }

    componentDidMount() {
        const { schedulerActions, match } = this.props;
        schedulerActions.fetchSchedulerByNumber(match.params.id);
    }

    updateScheduler(e) {
        e.preventDefault();

        let payload = {
            schedulerId: this.schedulerId.current.value,
            schedulerName: this.schedulerName.current.value,
            schedulerContact: this.schedulerContact.current.value,
            truckNumber : this.truckNumber.current.value,
            orderNumber : this.orderNumber.current.value//foreign key
        }

        const { schedulerActions ,match} = this.props;
        schedulerActions.updatescheduler(payload,match.params.id);
        if(this.props.isUpdated===true){
            return alert("scheduler is updated successfully")
        }

    }

    render() {
        const { schedulers,isUpdated } = this.props;

        if(schedulers !== undefined && isUpdated) {
            return <Redirect to='/getallschedulers'/>
        }
       
        return (
            <div>
                {
                    schedulers !== undefined ?

                        <form onSubmit={this.updateScheduler}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>Scheduler Id:</label></td>
                                        <td><input defaultValue={schedulers.schedulerId} type="text" ref={this.schedulerId} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Scheduler Name:</label></td>
                                        <td><input defaultValue={schedulers.schedulerName} type="text" ref={this.schedulerName} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Scheduler Contact</label></td>
                                        <td><input defaultValue={schedulers.schedulerContact} type="text" ref={this.schedulerContact} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Truck number</label></td>
                                        <td><input defaultValue={schedulers.truckNumber} type="text" ref={this.truckNumber} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Order Number</label></td>
                                        <td><input defaultValue={schedulers.orderNumber} type="text" ref={this.orderNumber} /></td>
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
        schedulers: state.SchedulerReducer.schedulers,
        isUpdated : state.SchedulerReducer.isUpdated
     }
}

function mapDispatchToProps(dispatch) {
    return {
        schedulerActions: bindActionCreators(schedulerActions, dispatch)
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(UpdateSchedulerById);