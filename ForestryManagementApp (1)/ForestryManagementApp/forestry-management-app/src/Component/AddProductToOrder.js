import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as orderActions from '../Store/Actions/OrderActions';

class OrderProductComponent extends React.Component {
    constructor() {
        super();
        this.state={
            orderNumber:'',
            productId:''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.createProducttoOrder=this.createProducttoOrder.bind(this);

    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    createProducttoOrder(e) {
        e.preventDefault();

        let payload = {
            orderNumber: this.state.orderNumber,
            productId:this.state.productId
        }
       const{
        orderActions,match
       }=this.props;
        orderActions.createProduct(payload);
        if(this.props.isAdded===true){
        alert("product is added to the cart successfully" )
        }
    }
    render() {

        return (
            <div>
                <div class="container">
                    <h1>Create Cart</h1>
                    <p>Please fill in this  to create a Cart.</p>

                    <label>Order Number:</label>
                    <input type="text" placeholder="Order Number" name="orderNumber" id="orderNumber" value={this.state.orderNumber} onChange={this.handleInputChange}></input>

                    <label>Product Id:</label>
                    <input type="text" placeholder="Product Id" name="productId" id="productId" value={this.state.productId} onChange={this.handleInputChange}></input>

                    <div class="clearfix">
                        <button type="button" onClick={<Redirect to="/productslist" />} class="cancelbtn">Cancel</button>
                        <button class="signupbtn" onClick={this.createProducttoOrder}>Create Contract</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
 
    return { orders: state.OrderReducer.order,
    isAdded:state.OrderReducer.isAdded }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      orderActions : bindActionCreators(orderActions,dispatch),
      
   }   
  };

export default connect(mapStateToProps,mapDispatchToProps) (OrderProductComponent);