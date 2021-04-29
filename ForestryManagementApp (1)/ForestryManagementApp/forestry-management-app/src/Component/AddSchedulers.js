import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as schedulerActions from '../Store/Actions/SchedulerActions';
import { Link, Redirect } from 'react-router-dom';


class CreateSchedulerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            schedulerId: '',
            schedulerName: '',
            schedulerContact: '',
            truckNumber: '',
            orderNumber:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createScheduler = this.createScheduler.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createScheduler(e) {
        e.preventDefault();

        let payload = {
            schedulerId: this.state.schedulerId,
            schedulerName: this.state.schedulerName,
            schedulerContact: this.state.schedulerContact,
            truckNumber: this.state.truckNumber,
            orderNumber:this.state.orderNumber

        }

        const { schedulerActions } = this.props;
        schedulerActions.createScheduler(payload);
        if(this.props.isAdded){
        alert("Scheduler Created Succssfully with id " + payload.schedulerId)
        }
    }

    clear = () => {
        this.setSate = ({
            schedulerId: '',
            schedulerName: '',
            schedulerContact: '',
            truckNumber: '',
            orderNumber:''


        });
    }
    render() {
        return (
            <div>
                <div class="container">
                    <h1>Create Scheduler</h1>
                    <p>Please fill in this  to create a Scheduler.</p>

                    <label>Scheduler Id:</label>
                    <input type="text" placeholder="Scheduler Id" name="schedulerId" id="schedulerId" value={this.state.schedulerId} onChange={this.handleInputChange}></input>


                    <label>Scheduler Name:</label>
                    <input type="text" placeholder="Scheduler Name" name="schedulerName" id="schedulerName" value={this.state.schedulerName} onChange={this.handleInputChange}></input>


                    <label>Scheduler Contact:</label>
                    <input type="text" placeholder="Scheduler Contact" name="schedulerContact" id="schedulerContact" value={this.state.schedulerContact} onChange={this.handleInputChange}></input>


                    <label>Truck Number:</label>
                    <input type="text" placeholder="Truck Number" name="truckNumber" id="truckNumber" value={this.state.truckNumber} onChange={this.handleInputChange}></input>

                    <label>Order Number:</label>
                    <input type="text" placeholder="Order Number" name="orderNumber" id="orderNumber" value={this.state.orderNumber} onChange={this.handleInputChange}></input>

                    <div class="clearfix">
                        <button type="button" onClick={<Redirect to="/getallschedulers" />} class="cancelbtn">Cancel</button>
                        <button class="signupbtn" onClick={this.createScheduler}>Create Scheduler</button>
                    </div>
                </div>



            </div>);
    }
}

function mapStateToProps(state) {

    return { scheduler: state.SchedulerReducer.newScheduler,
    isAdded:state.SchedulerReducer.isAdded }
}

function mapDispatchToProps(dispatch) {
    return {
        schedulerActions: bindActionCreators(schedulerActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSchedulerComponent);