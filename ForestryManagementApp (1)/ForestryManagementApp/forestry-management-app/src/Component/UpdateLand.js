import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import * as landActions from '../Store/Actions/LandActions';

class UpdateLand extends Component {

    constructor(props) {
        super(props);

        this.landId = React.createRef();
        this.surveyNumber = React.createRef();
        this.ownerName = React.createRef();
        this.landArea = React.createRef();

        this.updateLand = this.updateLand.bind(this);
    }
    componentDidMount() {
        const { landActions, match } = this.props;
        landActions.fetchLandById(match.params.id);
    }
    updateLand(e) {
        e.preventDefault();

        let payload = {
            landId: this.landId.current.value,
            surveyNumber: this.surveyNumber.current.value,
            ownerName: this.ownerName.current.value,
            landArea: this.landArea.current.value,
        }

        const { landActions,match } = this.props;
        landActions.updateLand(payload,match.params.id);
        if(this.props.isUpdated===true) {
            return alert("Land is updated successfully")
        }

    }

    render() {
       
        return (
            <div>
                {
                    this.props.lands !== undefined ?

                        <form onSubmit={this.updateLand}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>Land Id:</label></td>
                                        <td><input defaultValue={ this.props.lands.landId} type="text" ref={this.landId} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Survey Number:</label></td>
                                        <td><input defaultValue={this.props.lands.surveyNumber} type="text" ref={this.surveyNumber} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Owner Name:</label></td>
                                        <td><input defaultValue={this.props.lands.ownerName} type="text" ref={this.ownerName} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Land Area:</label></td>
                                        <td><input defaultValue={this.props.lands.landArea} type="text" ref={this.landArea} /></td>
                                    </tr>
                                    <tr>
                                        <td> <input type="submit" value="update"></input></td>
                                        <td><Link to="/"><button>Cancel</button></Link></td>
                                    </tr>
                                </tbody>
                            </table>              
                            
                        </form>
                        :
                        <h2>Loading....</h2>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { 
        lands: state.LandReducer.lands,
        isUpdated:state.LandReducer.isUpdated
     }
}

function mapDispatchToProps(dispatch) {
    return {
        landActions: bindActionCreators(landActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateLand);