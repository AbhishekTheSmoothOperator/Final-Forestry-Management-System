import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as customerActions from '../Store/Actions/CustomerActions';
import * as contractActions from '../Store/Actions/ContractActions'

class ProfileCard extends React.Component{
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
render(){
    return(
        this.props.customers !== undefined &&
        <div class="container emp-profile" >
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            {/* <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <div class="profile-head">
                                    <h5>
                                    {this.props.customers.customerName}
                                    </h5>
                                    <h6>
                                        Customer
                                    </h6>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#ABOUT" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    
                    <div class="col-md-2">
                    <a class="profile-edit-btn" id="edit-tab" data-toggle="tab" href={`/customerupdate/${this.props.customers.customerId}`} role="tab" aria-controls="home" aria-selected="true">Edit profile</a><br></br>
                    <a class="profile-edit-btn" id="edit-tab" data-toggle="tab" href={`/getcontractbycustomerid/${this.props.customers.customerId}`} role="tab" aria-controls="home" aria-selected="true">View My Contracts</a><br></br>
                    <a class="profile-edit-btn" id="edit-tab" data-toggle="tab" href={`/getorderbycustomerid/${this.props.customers.customerId}`} role="tab" aria-controls="home" aria-selected="true">View My Orders</a>

                    </div>
                    
                </div>
                <div class="row">
                    <div class="col-md-4">
                        
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Customer Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.props.customers.customerId}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.props.customers.customerName}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.props.customers.customerEmail}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.props.customers.customerContact}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Address</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.props.customers.customerAddress}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Town</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.props.customers.customerTown}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Postal Code</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.props.customers.customerPostalCode}</p>
                                            </div>
                                        </div>
                            </div>
                           
                        </div>
                    </div>
                    
                </div>
            </form>  
                   
        </div>
    )
}
}
function mapStateToProps(state) {
 
    return { customers: state.CustomerReducer.customers,
        contracts: state.ContractReducer.selectedcontracts }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      customerActions : bindActionCreators(customerActions,dispatch),
      contractActions : bindActionCreators(contractActions,dispatch)
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (ProfileCard);