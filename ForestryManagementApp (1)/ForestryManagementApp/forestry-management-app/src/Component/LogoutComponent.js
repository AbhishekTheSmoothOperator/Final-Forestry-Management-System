import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../Store/Actions/LoginActions';

class LogoutComponent extends React.Component {

    doLogout = e => {
        e.preventDefault();
        this.props.authActions.logout();
    }

    render() {

        if(this.props.isLoggedOut !== undefined && this.props.isLoggedOut === true) {
            return <Redirect to="/"></Redirect>
        }
        return (
            <div>
                <button onClick={this.doLogout}>Logout</button>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        isLoggedOut: state.LoginReducer.isLoggedOut
    }
}

function mapDispatchToProps(dispatch) {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutComponent);