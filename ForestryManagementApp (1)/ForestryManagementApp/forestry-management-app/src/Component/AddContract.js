import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contractActions from '../Store/Actions/ContractActions';
import { Link, Redirect } from 'react-router-dom';


class CreateContractComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contractNumber: '',
            deliveryPlace: '',
            deliveryDate: '',
            quantity: '',
            customerId:'',
            schedulerId:'',
            orderNumber:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createContract = this.createContract.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createContract(e) {
        e.preventDefault();

        let payload = {
            contractNumber: this.state.contractNumber,
            deliveryPlace: this.state.deliveryPlace,
            deliveryDate: this.state.deliveryDate,
            quantity: this.state.quantity,
            customer:this.state.customerId,
            scheduler:this.state.schedulerId,
            order:this.state.orderNumber
        }

        const { contractActions } = this.props;
        contractActions.createContract(payload);
        if(this.props.isAdded===true){
        alert("Contract Created Succssfully with id " + payload.contractNumber)
        }


    }

    clear = () => {
        this.setSate = ({
            contractNumber: '',
            deliveryPlace: '',
            deliveryDate: '',
            quantity: '',
            customerId:'',
            schedulerId:'',
            orderNumber:''


        });
    }
    render() {
        return (
            <div>
                <div class="container">
                    <h1>Create Contract</h1>
                    <p>Please fill in this  to create a Contract.</p>

                    <label>Contract Number:</label>
                    <input type="text" placeholder="Contract Number" name="contractNumber" id="contractNumber" value={this.state.contractNumber} onChange={this.handleInputChange}></input>


                    <label>Delivery Place:</label>
                    <input type="text" placeholder="Delivery Place" name="deliveryPlace" id="deliveryPlace" value={this.state.deliveryPlace} onChange={this.handleInputChange}></input>


                    <label>Delivery Date:</label><br></br>
                    <input type="date" placeholder="Delivery Date" name="deliveryDate" id="deliveryDate" value={this.state.deliveryDate} onChange={this.handleInputChange}></input><br></br>


                    <label>Quantity:</label>
                    <input type="text" placeholder="Quantity" name="quantity" id="quantity" value={this.state.quantity} onChange={this.handleInputChange}></input>

                    
                    <label>Customer Id:</label>
                    <input type="text" placeholder="Customer Id" name="customerId" id="customerId " value={this.state.customerId} onChange={this.handleInputChange}></input>

                    
                    <label>Scheduler Id:</label>
                    <input type="text" placeholder="Scheduler Id" name="schedulerId" id="schedulerId" value={this.state.schedulerId} onChange={this.handleInputChange}></input>

                    
                    <label>Order Number:</label>
                    <input type="text" placeholder="Order Number" name="orderNumber" id="orderNumber" value={this.state.orderNumber} onChange={this.handleInputChange}></input>

                    <div class="clearfix">
                        <button type="button" onClick={<Redirect to="/getallcontracts" />} class="cancelbtn">Cancel</button>
                        <button class="signupbtn" onClick={this.createContract}>Create Contract</button>
                    </div>
                </div>



            </div>);
    }
}

function mapStateToProps(state) {

    return { contract: state.ContractReducer.newContract,
    isAdded:state.ContractReducer.isAdded }
}

function mapDispatchToProps(dispatch) {
    return {
        contractActions: bindActionCreators(contractActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateContractComponent);