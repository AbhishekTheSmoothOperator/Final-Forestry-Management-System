import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect} from 'react-router-dom';
import * as productActions from '../Store/Actions/ProductActions';

class UpdateProduct extends Component {

    constructor(props) {
        super(props);

        this.productId = React.createRef();
        this.productName = React.createRef();
        this.productDescription = React.createRef();
        this.productQuantity = React.createRef();
        this.productPrice = React.createRef();

        this.updateProduct = this.updateProduct.bind(this);
    }
    componentDidMount() {
        const { productActions, match } = this.props;
        productActions.fetchProductById(match.params.id);
    }
    updateProduct(e) {
        e.preventDefault();

        let payload = {
            productId: this.productId.current.value,
            productName: this.productName.current.value,
            productDescription: this.productDescription.current.value,
            productQuantity: this.productQuantity.current.value,
            productPrice: this.productPrice.current.value,
        }

        const { productActions,match } = this.props;
        productActions.updateproduct(payload, match.params.id);
        if(this.props.isUpadted===true) {
            return alert("Product updated successfully")
        }

    }

    render() {
       
        return (
            <div>
                {
                    this.props.products !== undefined ?

                        <form onSubmit={this.updateProduct}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label>Product Id:</label></td>
                                        <td><input defaultValue={ this.props.products.productId} type="text" ref={this.productId} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Product Name:</label></td>
                                        <td><input defaultValue={this.props.products.productName} type="text" ref={this.productName} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Product Description:</label></td>
                                        <td><input defaultValue={this.props.products.productDescription} type="text" ref={this.productDescription} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Product Price:</label></td>
                                        <td><input defaultValue={this.props.products.productPrice} type="text" ref={this.productPrice} /></td>
                                    </tr>
                                    <tr>
                                        <td><label>Product Quantity:</label></td>
                                        <td><input defaultValue={this.props.products.productQuantity} type="text" ref={this.productQuantity} /></td>
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
        products: state.ProductReducer.products,
        isUpadted:state.ProductReducer.isUpadted
     }
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct);