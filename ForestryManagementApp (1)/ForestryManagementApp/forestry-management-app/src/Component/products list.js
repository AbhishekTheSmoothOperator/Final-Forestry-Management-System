import React from 'react';
import { Table } from 'reactstrap';
import * as orderActions from '../Store/Actions/OrderActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productActions from '../Store/Actions/ProductActions';
import { Button } from 'reactstrap';

class ProductsListComponent extends React.Component {
    constructor() {
        super();
        this.state={
            orderNumber:'',
            // productQuantity:1
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.createProducttoOrder=this.createProducttoOrder.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        this.props.productActions.fetchAllProducts();
    }
    createProducttoOrder(e) {
        e.preventDefault();
        const value1 = e.currentTarget.getAttribute("data-value1")
        let payload = {
            orderNumber: this.state.orderNumber,
            productId:value1
        }
        
       const{
        orderActions
       }=this.props;
        orderActions.createProduct(payload);
            if(this.props.orders.isAdded == true){
                return  alert("product is added to the cart successfully" );
            }   
           
      
        
    }
    render() {
        
      

        return (
            
            <div>
                
                <h3>Products List</h3> 
                <Table responsive striped>
                    <thead>
                        <tr>
                            <th>productId</th>
                            <th>productName</th>
                            <th>productDescription</th>
                            <th>ProductPrice</th>
                            <th>Order Number</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                            {this.props.products.map(product =>
                                <tr>
                                    <td>{product.productId}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productDescription}</td>
                                    <td>{product.productPrice}</td>
                                    <td>
                                    <label>Order Number:</label>
                                    <input type="text" placeholder="Order Number" name="orderNumber" id="orderNumber" value={this.state.orderNumber} onChange={this.handleInputChange}></input>

                                    </td>
                                    <td>
                                    <Button color='primary' onClick={this.createProducttoOrder} data-value1={product.productId} >Add Cart</Button>
                                    </td>
                                    
                                </tr>
                            )}
                    </tbody>
                </Table>
            </div>
            
            
           
        );
    }
}

function mapStateToProps(state) {
 
    return { orders: state.OrderReducer.order,
    products: state.ProductReducer.products,
isAdded:state.OrderReducer.isAdded }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      orderActions : bindActionCreators(orderActions,dispatch),
      productActions: bindActionCreators(productActions, dispatch),

      
   }   
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsListComponent);