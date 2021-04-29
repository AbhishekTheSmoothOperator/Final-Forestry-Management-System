import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from '../Store/Actions/ProductActions';
import { Link, Redirect } from 'react-router-dom';


class CreateProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productId: '',
            productName: '',
            productDescription:'',
            productQuantity: '',
            productPrice:''
           
    
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createProduct = this.createProduct.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    createProduct(e) {
        e.preventDefault();

        let payload = {
            productId: this.state.productId,
            productName: this.state.productName,
            productDescription:this.state.productDescription,
            productQuantity: this.state.productQuantity,
            productPrice:this.state.productPrice
           
        }

        const { productActions } = this.props;
        productActions.createproduct(payload);
        if(this.props.isAdded===true){
        alert("Product Created Succssfully with number " + payload.productId)
        }
    }

    clear = () => {
        this.setSate = ({
            productId: '',
            productName: '',
            productDescription:'',
            productQuantity: '',
            productPrice:''
 


        });
    }
    render() {
        return (
            <div>
                <div class="container">
                    <h1>Create Product</h1>
                    <p>Please fill in this  to create a Product.</p>

                    <label>Product ID:</label>
                    <input type="text" placeholder="Product Id" name="productId" id="productId" value={this.state.productId} onChange={this.handleInputChange}></input>


                    <label>Product Name:</label>
                    <input type="text" placeholder="Product Name" name="productName" id="productName" value={this.state.productName} onChange={this.handleInputChange}></input>


                    <label>Product Description:</label>
                    <input type="text" placeholder="Product Description" name="productDescription" id="productDescription" value={this.state.productDescription} onChange={this.handleInputChange}></input>

                    <label>Product Price:</label>
                    <input type="text" placeholder="Product Price" name="productPrice" id="productPrice" value={this.state.productPrice} onChange={this.handleInputChange}></input>

                    <label>Product Quantity:</label>
                    <input type="text" placeholder="Product Quantity" name="productQuantity" id="productQuantity" value={this.state.productQuantity} onChange={this.handleInputChange}></input>

                    

                    <div class="clearfix">
                        <button type="button" onClick={<Redirect to="/getallproducts" />} class="cancelbtn">Cancel</button>
                        <button class="signupbtn" onClick={this.createProduct}>Create Product</button>
                    </div>
                </div>



            </div>);
    }
}

function mapStateToProps(state) {

    return { products: state.ProductReducer.newProduct,
    isAdded: state.ProductReducer.isAdded }
}

function mapDispatchToProps(dispatch) {
    return {
        productActions: bindActionCreators(productActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProductComponent);