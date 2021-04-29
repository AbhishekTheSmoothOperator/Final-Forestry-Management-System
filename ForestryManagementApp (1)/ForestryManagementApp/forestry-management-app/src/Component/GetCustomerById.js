import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../Store/Actions/CustomerActions'

class CustomerComponent extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
       const{
        customerActions,match
       }=this.props;
        customerActions.fetchCustomerById(match.params.id);
    }
    render() {

        return (
            <div>
                <h3>Customer By Id</h3>
                {
                this.props.customers !== undefined ?
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
                        </tr>
                    </thead>
                    <tbody>
                      {
                          <tr>
                          <td>{this.props.customers.customerId}</td>
                          <td>{this.props.customers.customerName}</td>
                          <td>{this.props.customers.customerEmail}</td>
                          <td>{this.props.customers.customerAddress}</td>
                          <td>{this.props.customers.customerTown}</td>
                          <td>{this.props.customers.customerPostalCode}</td>
                          <td>{this.props.customers.customerContact}</td>
                      </tr>
          
                      }  
                                
                    </tbody>
                
                </Table>
                :
                <h3>Loading</h3>
                };
            </div>
        );
    }
}

function mapStateToProps(state) {
 
    return { customers: state.CustomerReducer.customers }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      customerActions : bindActionCreators(customerActions,dispatch),
      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (CustomerComponent);