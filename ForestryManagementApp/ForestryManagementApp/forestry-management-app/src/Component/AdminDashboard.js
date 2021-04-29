import React from 'react';
import LoginComponent from './LoginComponent';
import customer from '../images/491518843.jpg';
import contract from '../images/Types-of-contracts-Cover.jpg';
import order from '../images/aa.png';
import scheduler from '../images/people-planning-concept-entrepreneurship-calendar-260nw-1523635688.jpg';
import land from '../images/39472565960_348c29b2ca_z.jpg';
import product from '../images/PEFC.jpg';


class AdminDashboard extends React.Component {

    constructor(props) {
        super(props);
        
       
    };
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        {/* <a className="navbar-brand" href="#">Admin</a> */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-start" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/ADMIN">Home</a>
                                </li>
                                
                                <div class="nav navbar-nav navbar-right">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Admin
                                        </a>

                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                            <li><a className="dropdown-item" href={`/getadminbyname/${this.props.location.state.username}`}>View Profile</a></li>
                                            <li><a className="dropdown-item" href="/">Logout</a></li>

                                        </ul>
                                        
                                    </li>
                                </div>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
        </div>
        <div className="row">



<div className="card col-sm-6 overflow" style={{width: '50rem'}}>
<a href="/getallcustomers">
<img src={customer} className="card-img-top" />
</a>
<div className="card-body">
<h5 className="card-title">Customer</h5>
<p className="card-text text-secondary">A customer is the recipient of a good, service, product or an idea - obtained from a seller, vendor, or supplier via a financial transaction or exchange for money or some other valuable consideration.</p>
<a href="/getallcustomers" class="btn btn-outline-success">Go to Customers</a>
</div>

</div>

<div className="card col-sm-6 overflow" style={{width: '40rem'}}>
<a href="/getallschedulers">
<img src={scheduler} className="card-img-top"/>
</a>
<div className="card-body">
<h5 className="card-title">Scheduler</h5>
<p className="card-text text-secondary">The scheduler will take in information such as current inventory at the forestry business and the projected demand and inventory information at the client side. In simple words it is the delivery end of the forestry goods.</p>
<a href="/getallschedulers"  class="btn btn-outline-success">Go to Schedulers</a>
</div>

</div>


<div className="card col-sm-6 overflow" style={{width: '24rem'}}>
<a href="/getalllands">
<img src={land} className="card-img-top" />
</a>
<div className="card-body">
<h5 className="card-title">Land</h5>
<p className="card-text text-secondary">This will store all the land records and the various rights assigned to all the resources in each of the land parcels.</p>
<a href="/getalllands"  class="btn btn-outline-success">Go to Lands</a>
</div>

</div>


<div className="card col-sm-6 overflow" style={{width: '32rem'}}>
<a href="/getallcontracts">
<img src={contract} className="card-img-top" />
</a>
<div className="card-body">
<h5 className="card-title">Contract</h5>
<p className="card-text text-secondary">A contract is a legally binding document between at least two parties
    that defines and governs the rights and duties of the parties to an agreement.</p>
    <a href="/getallcontracts" class="btn btn-outline-success">Go to Contracts</a>
</div>


</div>
<div className="card col-sm-6 overflow" style={{width: '32rem'}}>
<a href="/getallproducts">
<img src={product} className="card-img-top" />
</a>
<div className="card-body">
<h5 className="card-title">Product</h5>
<p className="card-text text-secondary">A product is an object or system made available for consumer use, it is anything that can be offered to a market to satisfy the desire or need of a customer.</p>
<a href="/getallproducts" class="btn btn-outline-success">Go to Products</a>
</div>


</div>

<div className="card col-sm-6 overflow" style={{width: '32rem'}}>
<a href="/getallorders">
<img src={order} className="card-img-top"  />
</a>
<div className="card-body">
<h5 className="card-title">Order</h5>
<p className="card-text text-secondary"> It means you have successfully placed the order and no further action is required from you. This is also shown sometimes as "Your order has been confirmed.</p>
<a href="/getallorders" class="btn btn-outline-success">Go to Orders</a>
</div>


</div>

</div>
<div>
                {/* Footer */}

                <footer className="bg-dark text-center text-white">

                    <div className="container p-4">

        
                       
                            <form action="">

                                <div className="row d-flex justify-content-center">

                                    <div className="col-auto">
                                        <p className="pt-2">
                                            <strong>Contact Us: </strong> <u>forestrymanagementsystem@gmail.com</u>
                                        </p>
                                    </div>
                                       </div>

                            </form>
                        

                        <section className="mb-4">
                            <p>
                            The Forestry Management System will ease and facilitate the work of various organizations that depend upon natural resources from forests for their work. 
Forestry management becomes important as more companies become engaged in forest related endeavours. This system can be hosted over the internet thereby enabling communication between forest plots and the different clients such as mills or other such raw material providers. The different modules of the Forestry Management System enable different functions ranging from maintenance of land records to management of inventories.
The system will store information on the land parcels owned, track historical changes in ownership and even maintain a digital database of their deeds. Modern laws require accountability for the exploitation for any natural resource in the forest and different laws and rights cover the mineral and timber resources. 
The system also helps track client needs and schedule deliveries accordingly.

      </p>
                        </section>

                        
                    </div>



                    <div className="text-center p-3">
                        © 2021 Copyright : All rights reserved.
   
                    </div>

                </footer>

            </div>
            </div>
        );

    }
}
export default AdminDashboard;