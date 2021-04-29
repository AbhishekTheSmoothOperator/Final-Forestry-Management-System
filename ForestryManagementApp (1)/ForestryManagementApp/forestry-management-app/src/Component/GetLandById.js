import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LandActions from '../Store/Actions/LandActions';

class LandComponent extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
       const{
        LandActions,match
       }=this.props;
        LandActions.fetchLandById(match.params.id);
    }
    render() {

        return (
            <div>
                <h3>Land By Id</h3>
                {
                this.props.lands !== undefined ?
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>Land Id</th>
                            <th>Survey Number</th>
                            <th>Owner Name</th>
                            <th>Land Area</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          <tr>
                          <td>{this.props.lands.landId}</td>
                          <td>{this.props.lands.surveyNumber}</td>
                          <td>{this.props.lands.ownerName}</td>
                          <td>{this.props.lands.landArea}</td>
                      </tr>
          
                      }  
                                
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
 
    return { lands: state.LandReducer.lands }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      LandActions : bindActionCreators(LandActions,dispatch),
      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (LandComponent);