import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from '../Store/Actions/ProductActions';
class GetAllProductsComponent extends React.Component {
    constructor() {
        super();
        // this.handleDelete=this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.productActions.fetchAllProducts();
    }
    handleDelete() {
        
        alert("Product Deleted Succssfully ")
    }

    render() {

        return (
            <div>
                <div><marquee width="100%" direction="right" height="50px" scrollamount="15">
            <h3>Products List</h3> </marquee></div>
                <Table className="table table-striped table-dark table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>productId</th>
                            <th>productName</th>
                            <th>productDescription</th>
                            <th>ProductPrice</th>
                            <th>productQuantity</th>

                            <th>View</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {this.props.products.map(product =>
                                <tr>
                                    <td>{product.productId}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productDescription}</td>
                                    <td>{product.productPrice}</td>
                                    <td>{product.productQuantity}</td>
                                    <td>
                                        <Link to={`/getproduct/${product.productId}`}>View</Link>
                                    </td>
                                    <td>
                                        <Link to={`/updateproduct/${product.productId}`}>Update</Link>
                                    </td>
                                    <td>
                                        {/* <Link to={`/deleteorder/${order.OrderNumber}`}>Delete</Link> */}
                                        <Button color="danger"  onClick={() => {this.props.productActions.deleteProduct(product.productId);alert("Product deleted successfully with ProductId "+product.productId);}}>Delete</Button>

                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>
                <Link to={`/addproduct`}>
                <Button color="primary">Create Product</Button>
                </Link>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return { products: state.ProductReducer.products }
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch),

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllProductsComponent);