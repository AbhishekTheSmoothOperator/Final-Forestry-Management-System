import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contractActions from '../Store/Actions/ContractActions'

class ContractByNumber extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
        const{
            contractActions,match
           }=this.props;
           contractActions.fetchContractByNumber(match.params.id);
    }
    render() {

        return (
            <div>
                <h3>Contract By Number</h3>
                {
                this.props.contracts !== undefined ?
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>ContractNumber</th>
                            <th>DeliveryPlace</th>
                            <th>DeliveryDate</th>
                            <th>Quantity</th>
                            <th>Customer Id</th>
                            <th>Order Number</th>
                            <th>Scheduler Id</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          <tr>
                          <td>{this.props.contracts.contractNumber}</td>
                          <td>{this.props.contracts.deliveryPlace}</td>
                          <td>{this.props.contracts.deliveryDate}</td>
                          <td>{this.props.contracts.quantity}</td>
                          <td>{this.props.contracts.customer}</td>
                          <td>{this.props.contracts.order}</td>
                          <td>{this.props.contracts.scheduler}</td>
                      </tr>
          
                      }  
                                
                    </tbody>
                
                </Table>
                :
                <h3>Loading</h3>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
 
    return { contracts: state.ContractReducer.contracts }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      contractActions : bindActionCreators(contractActions,dispatch),
      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (ContractByNumber);