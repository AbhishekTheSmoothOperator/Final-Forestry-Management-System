import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../Store/Actions/SignupActions';
class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid:'',
            username: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.doSignup = this.doSignup.bind(this);

    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    doSignup(e) {
        e.preventDefault();
        const payload = {
            adminId:this.state.userid,
            adminName: this.state.username,
            adminPassword: this.state.password,
            
        }

        if (this.validate()) {
            this.props.authActions.doSignup(payload);
        }

    }
    validate() {
        let adminId=this.state.userid;
        let adminName = this.state.username;
        let adminPassword = this.state.password;
        let errors = {};
        let isValid = true;

        if (!adminId) {
            isValid = false;
            errors["username"] = "Please enter your id.";
        }
        if (!adminName) {
            isValid = false;
            errors["username"] = "Please enter your name.";
        }

        if (!adminPassword) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        this.setState({
            errors: errors
        });
        return isValid;
    }
    render() {
        const { isAuthUser, user } = this.props;

        if (user !== undefined) {
            if ( isAuthUser) return <Redirect to="/"/>;
            else return alert("invalid user")

        }
        // if(isAuthUser === false ) {
        //     console.log("Login Failed");
        // }       

        return (
            <div >
                {
                    (this.props.isAuthUser === false) && <div>Signup Failed</div>
                }
            <div class="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            
            <label for="uname"><b>UserId</b></label>
                    <input type="text" placeholder="Enter Userid" name="userid" value={this.state.userid} onChange={this.handleInputChange} required></input>
            <div className="text-danger">{this.state.errors.username}</div>
            <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.handleInputChange} required></input>
            <div className="text-danger">{this.state.errors.username}</div>
        
            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="password"  value={this.state.password} onChange={this.handleInputChange} required/>
            <div className="text-danger">{this.state.errors.password}</div>
                <label>
              <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label>
            <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
            <div class="clearfix">
              <button type="button" onClick={<Redirect to="/login"/>} class="cancelbtn">Cancel</button>
              <button  class="signupbtn" onClick= {this.doSignup}>Sign Up</button>
            </div>
            </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.SignupReducer.user,
        isAuthUser: state.SignupReducer.isAuthUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);