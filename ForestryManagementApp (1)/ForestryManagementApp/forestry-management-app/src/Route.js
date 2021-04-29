import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminDashboard from './Component/AdminDashboard';
import CustomerDashboard from './Component/CustomerDashboard';
import CustomerLogin from './Component/CustomerLogin';
import CustomerSignUp from './Component/CustomerSignUp';
import getadminbyname from './Component/getadminbyname';
import GetAllContracts from './Component/GetAllContracts';
import GetAllCustomers from './Component/GetAllCustomers';
import GetAllLands from './Component/GetAllLands';
import GetAllOrders from './Component/GetAllOrders';
import GetAllProducts from './Component/GetAllProducts';
import GetAllSchedulers from './Component/GetAllSchedulers';
import GetContractByContractNumber from './Component/GetContractByContractNumber';
import GetCustomerById from './Component/GetCustomerById';
import GetCustomerByName from './Component/GetCustomerByName';
import GetLandById from './Component/GetLandById';
import GetOrderByNumber from './Component/GetOrderByNumber';
import GetProductById from './Component/GetProductById';
import GetSchedulerByid from './Component/GetSchedulerByid';
import Home from './Component/HomeComponent';
import LoginComponent from './Component/LoginComponent';
import SignupComponent from './Component/SignupComponent';
import UpdateLand from './Component/UpdateLand';
import UpdateOrder from './Component/UpdateOrder';
import UpdateProduct from './Component/UpdateProduct';
import UpdateCustomerById from './Component/updatecustomer'
import UpdateScheduler from './Component/UpdateScheduler';
import UpdateContract from './Component/UpdateContract';
import CreateLandComponent from './Component/AddLand';
import CreateContractComponent from './Component/AddContract';
import CreateCustomerComponent from './Component/AddCustomer';
import CreateSchedulerComponent from './Component/AddSchedulers';
import CreateOrderComponent from './Component/AddOrder';
import CreateProductComponent from './Component/AddProducts';
import GetContractByCustomerId from './Component/GetContractByCustomerId';
import OrderProductComponent from './Component/AddProductToOrder';
import ProductsListComponent from'./Component/products list';
import GetOrderByCustomerId from './Component/GetOrderByCustomerId';
import profileCard from './Component/profile card';
import customerupdate from './Component/customerupdate';
import LogoutComponent from './Component/LogoutComponent';
 
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path={`/ADMIN`} component={AdminDashboard}/>
            <Route path={`/customerlogin`} component={CustomerLogin}/>
            <Route path={`/getallorders`} component={GetAllOrders}/>
            <Route path={`/getorder/:id`} component={GetOrderByNumber}/>
            <Route path={`/updateorder/:id`} component={UpdateOrder}/>
            <Route path={`/addorder`} component={CreateOrderComponent}/>
            <Route path={`/addproducttoorder`} component={OrderProductComponent}/>
            <Route path={`/getorderbycustomerid/:id`} component={GetOrderByCustomerId}/>
            <Route path={`/getalllands`} component={GetAllLands}/>
            <Route path={`/getland/:id`} component={GetLandById}/>
            <Route path={`/updateland/:id`} component={UpdateLand}/>
            <Route path={`/addland`} component={CreateLandComponent}/>
            <Route path={`/getallcontracts`} component={GetAllContracts}/>
            <Route path={`/getcontract/:id`} component={GetContractByContractNumber}/>
            <Route path={`/updatecontract/:id`} component={UpdateContract}/>
            <Route path={`/addcontract`} component={CreateContractComponent}/>
            <Route path={`/getallschedulers`} component={GetAllSchedulers}/>
            <Route path={`/getscheduler/:id`} component={GetSchedulerByid}/>
            <Route path={`/updatescheduler/:id`} component={UpdateScheduler}/>
            <Route path={`/addscheduler`} component={CreateSchedulerComponent}/>
            <Route path={`/getallproducts`} component={GetAllProducts}/>
            <Route path={`/getproduct/:id`} component={GetProductById}/>
            <Route path={`/updateproduct/:id`} component={UpdateProduct}/>
            <Route path={`/addproduct`} component={CreateProductComponent}/>
            <Route path={`/productslist`} component={ProductsListComponent}/>
            <Route path={`/getallcustomers`} component={GetAllCustomers}/>
            <Route path={`/getcustomer/:id`} component={GetCustomerById}/>
            <Route path={`/getcontractbycustomerid/:id`} component={GetContractByCustomerId}/>
            <Route path={`/addcustomer`} component={CreateCustomerComponent}/>
            <Route path={`/getadminbyname/:id`} component={getadminbyname}/>
            <Route path={`/getcustomerbyname/:id`} component={profileCard}/>
            <Route path={`/updatecustomer/:id`} component={UpdateCustomerById}/>
            <Route path={`/customerupdate/:id`} component={customerupdate}/>
            <Route path={`/CUSTOMER`} component={CustomerDashboard}/> 
            <Route path={'/signup'} component={SignupComponent}/>
            <Route path={'/customersignup'} component={CustomerSignUp}/>
             <Route path={`/adminlogin`} component={LoginComponent} />
             <Route path={`/logout`} component={LogoutComponent}/>
        </Switch>
    </BrowserRouter>
);
 
export default Routes;