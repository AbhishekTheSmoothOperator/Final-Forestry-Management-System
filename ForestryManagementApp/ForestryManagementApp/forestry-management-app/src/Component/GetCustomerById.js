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
        console.log(this.props.cutomers)
        return (
            <div>
                <h3>Customer By Id</h3>
                {
                 this.props.customers.length >= 0  ?
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
                          this.props.customers.map(customer => 
                          <tr>
                          <td>{customer.customerId}</td>
                          <td>{customer.customerName}</td>
                          <td>{customer.customerEmail}</td>
                          <td>{customer.customerAddress}</td>
                          <td>{customer.customerTown}</td>
                          <td>{customer.customerPostalCode}</td>
                          <td>{customer.customerContact}</td>
                      </tr>
          
                          )}  
                                
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
 
    return { customers: state.CustomerReducer.selectedcustomer }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      customerActions : bindActionCreators(customerActions,dispatch),
      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (CustomerComponent);