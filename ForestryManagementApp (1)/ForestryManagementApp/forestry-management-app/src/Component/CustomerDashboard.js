import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import * as orderActions from '../Store/Actions/OrderActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import * as productActions from '../Store/Actions/ProductActions';

class CustomerDashboard extends React.Component {
    constructor(props) {
        super(props);

       
        this.state={
            orderNumber:'',
            errors: {}
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
       if (this.validate()) {
        orderActions.createProduct(payload);
       }
        if(this.props.isAdded == true){
            return  alert("product is added to the cart successfully" );
        }
      
        
    }
    validate() {
        let orderNumber = this.state.orderNumber;
        let errors = {};
        let isValid = true;

        if (!orderNumber) {
            isValid = false;
            errors["orderNumber"] = "Please enter Order Number.";
        }
        this.setState({
            errors: errors
        });
        return isValid;
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                
                               

                                <li className="nav-item dropdown ">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Customer
                                         </a>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                    <li><a className="dropdown-item" href={`/getcustomerbyname/${this.props.location.state.username}`}>View Profile</a></li>
                                        <li><a className="dropdown-item" href="#">Logout</a></li>

                                    </ul>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
                <div><marquee width="100%" direction="right" height="50px" scrollamount="15">
                <h3>Product List</h3> </marquee></div> 
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
                                    <input type="text" placeholder="Order Number" name="orderNumber" id="orderNumber" value={this.state.orderNumber} onChange={this.handleInputChange} required></input>
                                    <div className="text-danger">{this.state.errors.orderNumber}</div>
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
    isAdded:state.OrderReducer.isAdded  }
}  
 
function mapDispatchToProps (dispatch) {
   return {
      orderActions : bindActionCreators(orderActions,dispatch),
      productActions: bindActionCreators(productActions, dispatch),

      
   }   
};
export default connect(mapStateToProps, mapDispatchToProps) (CustomerDashboard);