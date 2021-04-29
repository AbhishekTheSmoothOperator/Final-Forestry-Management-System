import React from 'react';
import { Redirect,Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../Store/Actions/LoginActions';
import AdminDashboard from './AdminDashboard';
import image from '../images/avatar.png'
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.doLogin = this.doLogin.bind(this);
        this.dosignup=this.dosignup.bind(this);

    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    doLogin(e) {
        e.preventDefault();
        const payload = {
            adminName: this.state.username,
            adminPassword: this.state.password
        }

        if (this.validate()) {
            this.props.authActions.doLogin(payload);
        }
        

        
        
    }
    dosignup(e){
        e.preventDefault();
        const payload = {
            adminName: this.state.username,
            adminPassword: this.state.password
        }
    }
    validate() {
        let username = this.state.username;
        let password = this.state.password;
        let errors = {};
        let isValid = true;

        if (!username) {
            isValid = false;
            errors["username"] = "Please enter your name.";
        }

        if (!password) {
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
            if (isAuthUser){
               
               return <Redirect to={{
                    pathname:"/ADMIN",
                    state: { username: user.adminName }
               }}/>;
            } 
            else return alert("invalid user")
            
        }     
        

        return (
            
            
            <div className="image2container">
                {
                    (this.props.isAuthUser === false) && <div>Login Failed</div>
                }
                <div className="marg login-box bodyadmin"><center>
                {
                    (this.props.isAuthUser === false) && <div>Login Failed</div>
                }
                <h1 className="text-danger">ADMIN LOGIN</h1>
                <p>

                <div class="imgcontainer">
                <img src={image} alt="Avatar" class="avatar"/>
                </div>
                    <div className="col-sm-4 textbox">
                    <i className="fas fa-user"></i>
                        <input type="text" className="form-control " placeholder="User Id" name="username" id="customerId" value={this.state.username} onChange={this.handleInputChange} />
                        <div className="text-danger">{this.state.errors.username}</div>
                    </div>
                </p>


                <p>
                    <div className="col-sm-4 textbox">
                    <i className="fas fa-lock"></i>
                        <input type="password" className="form-control" placeholder="Password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange} />
                        <div className="text-danger">{this.state.errors.password}</div>
                    </div>
                </p>


                <p className="col-sm-4 d-grid gap-2">
                    {/* <button onClick={this.doLogin}>Login</button> */}
                    <button type="button" class="btn btn-outline-danger" onClick={this.doLogin}>Login</button>
                    {/* <Button variant="contained" color="primary" onClick={this.doLogin}>Login</Button> */}
                </p>

                <div >
				<div className="d-flex justify-content-center links">
					Don't have an account? &nbsp;<a href="/signup">Sign Up</a>
				</div>
			</div>

                </center>
            </div> 
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
                        user: state.LoginReducer.user,
        isAuthUser: state.LoginReducer.isAuthUser
    }
}
function mapDispatchToProps(dispatch) {
    return {
                        authActions: bindActionCreators(authActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);