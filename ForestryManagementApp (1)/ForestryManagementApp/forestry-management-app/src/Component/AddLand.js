import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as landActions from '../Store/Actions/LandActions';
import { Link, Redirect } from 'react-router-dom';


class CreateLandComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            landId: '',
            landArea: '',
            surveyNumber: '',
            ownerName: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createLand = this.createLand.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createLand(e) {
        e.preventDefault();

        let payload = {
            landId: this.state.landId,
            landArea: this.state.landArea,
            surveyNumber: this.state.surveyNumber,
            ownerName: this.state.ownerName

        }

        const { landActions } = this.props;
        landActions.createLand(payload);
        if(this.props.isAdded===true){
            alert("Land Created Succssfully with id " + payload.landId)
        }
        


    }

    clear = () => {
        this.setSate = ({
            landId: '',
            landArea: '',
            surveyNumber: '',
            ownerName: ''


        });
    }
    render() {
        return (
            <div>
                <div class="container">
                    <h1>Create Land</h1>
                    <p>Please fill in this  to create a Land.</p>

                    <label>Land Id:</label>
                    <input type="text" placeholder="Land Id" name="landId" id="landId" value={this.state.landId} onChange={this.handleInputChange}></input>


                    <label>Land Area:</label>
                    <input type="text" placeholder="Land Area" name="landArea" id="landArea" value={this.state.landArea} onChange={this.handleInputChange}></input>


                    <label>Survey Number:</label>
                    <input type="text" placeholder="Survey Number" name="surveyNumber" id="surveyNumber" value={this.state.surveyNumber} onChange={this.handleInputChange}></input>


                    <label>Owner Name:</label>
                    <input type="text" placeholder="Owner Name" name="ownerName" id="ownerName" value={this.state.ownerName} onChange={this.handleInputChange}></input>

                    <div class="clearfix">
                        <button type="button" onClick={<Redirect to="/getalllands" />} class="cancelbtn">Cancel</button>
                        <button class="signupbtn" onClick={this.createLand}>Create Land</button>
                    </div>
                </div>



            </div>);
    }
}

function mapStateToProps(state) {

    return { land: state.LandReducer.newLand,
    isAdded:state.LandReducer.isAdded }
}

function mapDispatchToProps(dispatch) {
    return {
        landActions: bindActionCreators(landActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateLandComponent);