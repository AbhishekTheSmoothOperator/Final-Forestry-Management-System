import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../Store/Actions/SignupActions';
class SignupComponentCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: '',
            customerName: '',
            customerPassword: '',
            customerEmail: '',
            customerAddress: '',
            customerTown: '',
            customerPostalCode: '',
            customerContact: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.doCustomerSignup = this.doCustomerSignup.bind(this);

    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    doCustomerSignup(e) {
        e.preventDefault();
        const payload = {
            customerId: this.state.customerId,
            customerName: this.state.customerName,
            customerPassword: this.state.customerPassword,
            customerEmail: this.state.customerEmail,
            customerAddress: this.state.customerAddress,
            customerTown: this.state.customerTown,
            customerPostalCode: this.state.customerPostalCode,
            customerContact: this.state.customerContact
        }

        if (this.validate()) {
            this.props.authActions.doCustomerSignup(payload);
        }

    }
    validate() {
        
        let customerId = this.state.customerId;
        let customerName = this.state.customerName;
        let customerPassword = this.state.customerPassword;
        let customerEmail = this.state.customerEmail;
        let customerAddress = this.state.customerAddress;
        let customerTown = this.state.customerTown;
        let customerPostalCode = this.state.customerPostalCode;
        let customerContact = this.state.customerContact;
        
        let errors = {};
        let isValid = true;
        

        if (!customerId) {
            isValid = false;
            errors["customerId"] = "Please enter your customerId.";
        }

        if (!customerName) {
            isValid = false;
            errors["customerName"] = "Please enter your customerName.";
        }
        if (!customerPassword) {
            isValid = false;
            errors["customerPassword"] = "Please enter your customerPassword.";
        }
        if (!customerEmail) {
            isValid = false;
            errors["customerEmail"] = "Please enter your customerEmail.";
        }
        if (!customerAddress) {
            isValid = false;
            errors["customerAddress"] = "Please enter your customerAddress.";
        }
        if (!customerTown) {
            isValid = false;
            errors["customerTown"] = "Please enter your customerTown.";
        }
        if (!customerPostalCode) {
            isValid = false;
            errors["customerPostalCode"] = "Please enter your customerPostalCode.";
        }
        if (!customerContact) {
            isValid = false;
            errors["customerContact"] = "Please enter your customerContact.";
        }

        this.setState({
            errors: errors
        });
        return isValid;
    }
    render() {
        const { isAuthCustomer, customer } = this.props;

        if (customer !== undefined) {
            if ( isAuthCustomer) return alert("You have signed up successfuly as a customer") ;
            else return alert("invalid user")

        }
        // if(isAuthUser === false ) {
        //     console.log("Login Failed");
        // }       

        return (
            <div >
                {
                    (this.props.isAuthCustomer === false) && <div>Signup Failed</div>
                }
            <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
        
            <label for="customerId"><b>customerId</b></label>
                    <input type="text" placeholder="Enter customerId" name="customerId" value={this.state.customerId} onChange={this.handleInputChange} required></input>
            <div className="text-danger">{this.state.errors.customerId}</div>
        
            <label for="customerName"><b>customerName</b></label>
            <input type="text" placeholder="Enter customerName" name="customerName"  value={this.state.customerName} onChange={this.handleInputChange} required/>
            <div className="text-danger">{this.state.errors.customerName}</div>

            <label for="customerPassword"><b>customerPassword</b></label>
            <input type="password" placeholder="Enter customerPassword" name="customerPassword"  value={this.state.customerPassword} onChange={this.handleInputChange} required/>
            <div className="text-danger">{this.state.errors.customerPassword}</div>

            <label for="customerEmail"><b>customerEmail</b></label>
            <input type="text" placeholder="Enter customerEmail" name="customerEmail"  value={this.state.customerEmail} onChange={this.handleInputChange} required/>
            <div className="text-danger">{this.state.errors.customerEmail}</div>

            <label for="customerAddress"><b>customerAddress</b></label>
            <input type="text" placeholder="Enter customerAddress" name="customerAddress"  value={this.state.customerAddress} onChange={this.handleInputChange} required/>
            <div className="text-danger">{this.state.errors.customerAddress}</div>

            <label for="customerTown"><b>customerTown</b></label>
            <input type="text" placeholder="Enter customerTown" name="customerTown"  value={this.state.customerTown} onChange={this.handleInputChange} required/>
            <div className="text-danger">{this.state.errors.customerTown}</div>

            <label for="customerPostalCode"><b>customerPostalCode</b></label>
            <input type="text" placeholder="Enter customerPostalCode" name="customerPostalCode"  value={this.state.customerPostalCode} onChange={this.handleInputChange} required/>
            <div className="text-danger">{this.state.errors.customerPostalCode}</div>
            
            <label for="customerContact"><b>customerContact</b></label>
            <input type="text" placeholder="Enter customerContact" name="customerContact"  value={this.state.customerContact} onChange={this.handleInputChange} required/>
            <div className="text-danger">{this.state.errors.customerContact}</div>

                <label>
              <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
            <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
            <div class="clearfix">
              <button type="button" onClick={<Redirect to="/login"/>} class="cancelbtn">Cancel</button>
              <button  class="signupbtn" onClick={<Redirect to="/login"/>} onClick= {this.doCustomerSignup}>Sign Up</button>
            </div>
            </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        customer: state.SignupReducer.customer,
        isAuthCustomer: state.SignupReducer.isAuthCustomer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupComponentCustomer);