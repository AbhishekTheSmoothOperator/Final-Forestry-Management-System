import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect,Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../Store/Actions/CustomerActions'

class GetCustomerByName extends React.Component {
    constructor(props ) {
        super(props);
        this.state={
            customerId:''
        }
        
    }

    componentDidMount() {
        const{
            customerActions,match
           }=this.props;
           customerActions.fetchCustomerByName(match.params.id)
    }
    render() {

        return (
            <div>
                <h3>Customer Details</h3>
                {
                this.props.customers !== undefined ?
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>Customer Id</th>
                            <th>Customer Name</th>
                            <th>Customer Email</th>
                            <th>Customer Address</th>
                            <th>Customer Town</th>
                            <th>Customer PostalCode</th>
                            <th>Customer Contact</th>
                            <th>Get My Contracts</th>
                            <th>Get My Orders</th>
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
                          <td><Link to={`/getcontractbycustomerid/${this.props.customers.customerId}`}>GetContract</Link></td>
                          <td><Link to={`/getorderbycustomerid/${this.props.customers.customerId}`}>Get Orders</Link></td>
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
 
    return { customers: state.CustomerReducer.customers }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      customerActions : bindActionCreators(customerActions,dispatch),
      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (GetCustomerByName);