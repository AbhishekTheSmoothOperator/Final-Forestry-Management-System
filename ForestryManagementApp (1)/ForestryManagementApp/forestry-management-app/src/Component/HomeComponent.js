import '../App.css';

function Home() {
    return (
        <div className="fluid-container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">	&nbsp; Forestry Management System</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/adminlogin">Admin</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/customerlogin">Customer</a>
                        </li>

                    </ul>

                </div>
            </nav>

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/1400x600/?tree,jungle" className="d-block w-100" alt="Forest" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-dark bg-info font-weight-bold">“Nature always wears the colors of the spirit.”</h5>

                        </div>
                    </div>



                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x600/?jungle,tree" className="d-block w-100" alt="Forest" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-dark bg-info font-weight-bold">“Look deep into nature, and then you will understand everything better.”</h5>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1400x600/?forest,tree" className="d-block w-100" alt="Forest" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="text-dark bg-info font-weight-bold">“Knowing trees, I understand the meaning of patience. Knowing grass, I can appreciate persistence.”</h5>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <div className="App">
                <br /><br />
                <div className="container my-4">
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div
                                class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-info">Land</strong>


                                    <p className="card-text mb-auto">Land:This will store all the land records and the various rights assigned to all the resources in each of the land parcels. All reminders related to land related payments and other issues will be made here.</p>

                                </div>
                                <div className="col-auto d-none d-lg-block view overlay zoom">
                                    <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/1400x600/?land,land,land,landarea" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-success">Customer</strong>


                                    <p className="mb-auto justify-content-center">Client: Client accounts will be created by the Admin. Contracts will be stored under the client account and all contract related information can be accessed from the same. Clients will be able to continually update their inventory information and projected demand through this module.</p>
                                </div>
                                <div className="col-auto d-none d-lg-block view overlay zoom">
                                    <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/1400x600/?client,client" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-danger">Scheduler</strong>


                                    <p className="mb-auto justify-content-center">Scheduler: The scheduler will take in information such as current inventory at the forestry business and the projected demand and inventory information at the client side. Using this information, it will be able to schedule transport and assign the right load to the right client.</p>

                                </div>
                                <div className="col-auto d-none d-lg-block view overlay zoom">
                                    <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/1400x600/?truck,truck" alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div
                                className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <strong className="d-inline-block mb-2 text-primary">Admin</strong>


                                    <p className="mb-auto justify-content-center">Admin: The admin will be able to assign secure logins to new clients. The admin CANNOT alter record information but can add new data after authentication. The admin module can view inventory and contract settlement data and will show the contract information for verification by the forestry business.</p>

                                </div>
                                <div className="col-auto d-none d-lg-block view overlay zoom">
                                    <img className="bd-placeholder-img" width="200" height="250" src="https://source.unsplash.com/1400x600/?admin,admin" alt="" />

                                </div>
                            </div>
                        </div>
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

export default Home;