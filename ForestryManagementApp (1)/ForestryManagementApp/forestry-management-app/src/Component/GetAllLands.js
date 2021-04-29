import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LandActions from '../Store/Actions/LandActions';

class GetAllLandComponent extends React.Component {
    constructor() {
        super();
        this.deleteland=this.deleteland.bind(this);
    }

    componentDidMount() {
        this.props.LandActions.fetchAllLands();
    }
    deleteland(landId,e) {
        e.preventDefault();
        this.props.LandActions.deleteLand(landId);
        this.props.LandActions.fetchAllLands();
        alert("land deleted successfully with id "+landId);
        // this.props.history.push("/ADMIN");
    }

    // handleDelete(event) {
    //     event.preventDefault();
    //     let id=this.props.lands.landId
    //     const{
    //         LandActions,match
    //        }=this.props;
    //         LandActions.deleteLand(match.params.id);
    //     }
    render() {

        return (
            <div>
               <div><marquee width="100%" direction="right" height="50px"bgcolor="cyan" scrollamount="15">
            <h3>Lands List</h3> </marquee></div>
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>LandId</th>
                            <th>Survey Number</th>
                            <th>Owner Name</th>
                            <th>Land Area</th>
                            <th>View</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {this.props.lands.map(land =>
                                <tr>
                                    <td>{land.landId}</td>
                                    <td>{land.surveyNumber}</td>
                                    <td>{land.ownerName}</td>
                                    <td>{land.landArea}</td>
                                    <td>
                                        <Link to={`/getland/${land.landId}`}>View</Link>
                                    </td>
                                    <td>
                                        <Link to={`/updateland/${land.landId}`}>Update</Link>
                                    </td>
                                    <td>
                                        {/* <Link to={`/deleteadmin/${admin.adminId}`}>Delete</Link> */}
                                        <Button color="danger"  onClick={e=>this.deleteland(land.landId,e)} >Delete</Button>

                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>
                <Link to={`/addland`}>
                <Button color="primary">Create land</Button>
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { lands: state.LandReducer.lands }
}

function mapDispatchToProps(dispatch) {
    return {
        LandActions: bindActionCreators(LandActions, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllLandComponent);