import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
// import Axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from '../Store/Actions/ProductActions';

class ProductComponent extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {
       const{
        productActions,match
       }=this.props;
        productActions.fetchProductById(match.params.id);
    }
    render() {

        return (
            <div>
                <h3>Product By Id</h3>
                {
                this.props.products !== undefined ?
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>productId</th>
                            <th>productName</th>
                            <th>productDescription</th>
                            <th>productPrice</th>
                            <th>productQuantity</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          <tr>
                          <td>{this.props.products.productId}</td>
                          <td>{this.props.products.productName}</td>
                          <td>{this.props.products.productDescription}</td>
                          <td>{this.props.products.productPrice}</td>
                          <td>{this.props.products.productQuantity}</td>
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
 
    return { products: state.ProductReducer.products }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      productActions : bindActionCreators(productActions,dispatch),
      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (ProductComponent);