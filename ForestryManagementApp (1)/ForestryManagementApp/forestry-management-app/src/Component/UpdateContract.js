import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import * as contractActions from '../Store/Actions/ContractActions';

class UpdateContract extends Component {

    constructor(props) {
        super(props);

        this.contractNumber = React.createRef();
        this.deliveryPlace = React.createRef();
        this.deliveryDate = React.createRef();
        this.quantity = React.createRef();
        this.customer=React.createRef();
        this.scheduler=React.createRef();
        this.order=React.createRef();
        this.updateContract = this.updateContract.bind(this);
    }

    componentDidMount() {
        const { contractActions, match } = this.props;
        contractActions.fetchContractByNumber(match.params.id);
    }

    updateContract(e) {
        e.preventDefault();

        let payload = {
            contractNumber: this.contractNumber.current.value,
            deliveryPlace: this.deliveryPlace.current.value,
            deliveryDate: this.deliveryDate.current.value,
            quantity : this.quantity.current.value,
            customer:this.customer.current.value,
            scheduler:this.scheduler.current.value,
            order:this.order.current.value
        }

        const { contractActions ,match} = this.props;
        contractActions.updatecontract(payload,match.params.id);
        if(this.props.isUpdated===true){
            return  alert("Contract is upadted successfully")
        }


    }

    render() {
        const { contracts,isUpdated } = this.props;

        if(contracts !== undefined && isUpdated) {
            return <Redirect to='/getallcontracts'/>
        }
       
        return (
            <div>
                {
                    contracts !== undefined ?

                        <form onSubmit={this.updateContract}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>Contract Number:</label></td>
                                        <td><input defaultValue={contracts.contractNumber} type="text" ref={this.contractNumber} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Delivery Place:</label></td>
                                        <td><input defaultValue={contracts.deliveryPlace} type="text" ref={this.deliveryPlace} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Delivery Date:</label></td>
                                        <td><input defaultValue={contracts.deliveryDate} type="date" ref={this.deliveryDate} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Quantity:</label></td>
                                        <td><input defaultValue={contracts.quantity} type="text" ref={this.quantity} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Customer Id:</label></td>
                                        <td><input defaultValue={contracts.customer} type="text" ref={this.customer} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Scheduler Id:</label></td>
                                        <td><input defaultValue={contracts.scheduler} type="text" ref={this.scheduler} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Order Number:</label></td>
                                        <td><input defaultValue={contracts.order} type="text" ref={this.order} /></td>
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
        contracts: state.ContractReducer.contracts,
        isUpdated : state.ContractReducer.isUpdated
     }
}

function mapDispatchToProps(dispatch) {
    return {
        contractActions: bindActionCreators(contractActions, dispatch)
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(UpdateContract);