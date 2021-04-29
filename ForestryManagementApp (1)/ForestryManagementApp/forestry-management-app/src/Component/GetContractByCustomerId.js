import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as contractActions from '../Store/Actions/ContractActions'

class GetContractByCustomerId extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
        const{
            contractActions,match
           }=this.props;
           contractActions.fetchContractById(match.params.id);
    }
    render() {
        console.log(this.props.contract);
        return (
            <div>
                <h3>Contract By Number</h3>
                {
                this.props.contracts.length >= 0 ?
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
                          this.props.contracts.map(contract =>
                          <tr>
                          <td>{contract.contractNumber}</td>
                          <td>{contract.deliveryPlace}</td>
                          <td>{contract.deliveryDate}</td>
                          <td>{contract.quantity}</td>
                          <td>{contract.customer}</td>
                          <td>{contract.order}</td>
                          <td>{contract.scheduler}</td>
                          <td>
                                        <Link to={`/updatecontract/${contract.contractNumber}`}>Update</Link>
                          </td>
                      </tr>
          
                          )}  
                                
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
 
    return { contracts: state.ContractReducer.selectedcontracts }
}  
 
function mapDispatchToProps (dispatch) {
   return {
    contractActions : bindActionCreators(contractActions,dispatch),
      
   }   
};

export default connect(mapStateToProps,mapDispatchToProps) (GetContractByCustomerId);