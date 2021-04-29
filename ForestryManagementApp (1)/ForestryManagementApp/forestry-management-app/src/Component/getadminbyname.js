import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as adminActions from '../Store/Actions/AdminActions'

class GetAdminByName extends React.Component {
    constructor(props ) {
        super(props);
        
        
    }

    componentDidMount() {
        const{
            adminActions,match
           }=this.props;
           adminActions.fetchAdminByName(match.params.id)
    }
    render() {

        return (
            <div>
                <h3>Admin Details</h3>
                {
                this.props.admins !== undefined ?
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>Admin Id</th>
                            <th>Admin Name</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          <tr>
                          <td>{this.props.admins.adminId}</td>
                          <td>{this.props.admins.adminName}</td>
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
 
    return { admins: state.AdminReducer.admins }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      adminActions : bindActionCreators(adminActions,dispatch),
      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (GetAdminByName);