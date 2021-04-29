import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SchedulerActions from '../Store/Actions/SchedulerActions';

class SchedulerComponent extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
       const{
        SchedulerActions,match
       }=this.props;
       SchedulerActions.fetchSchedulerByNumber(match.params.id); 
    }
    render() {

        return (
            <div>
                <h3>Scheduler By Id</h3>
                {
                this.props.schedulers !== undefined ?
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>Scheduler Id</th>
                            <th>Scheduler Name</th>
                            <th>Scheduler Contact</th>
                            <th>Truck Number</th>
                            <th>Order Number</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          <tr>
                          <td>{this.props.schedulers.schedulerId}</td>
                          <td>{this.props.schedulers.schedulerName}</td>
                          <td>{this.props.schedulers.schedulerContact}</td>
                          <td>{this.props.schedulers.truckNumber}</td>
                          <td>{this.props.schedulers.orderNumber}</td>
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
 
    return { schedulers: state.SchedulerReducer.schedulers }
}  
 
function mapDispatchToProps (dispatch) {
   return {
    SchedulerActions : bindActionCreators(SchedulerActions,dispatch),
      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (SchedulerComponent);