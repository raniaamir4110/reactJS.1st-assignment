import React from 'react'
import OrderImage1 from '../../images/order 1.jpeg';
import OrderImage2 from '../../images/order 2.jpeg';
import OrderImage3 from '../../images/order 3.jpeg';

const Cards = () => {
    return (
        <div className="container px-4 py-5" id="custom-cards">
            <h2 className="pb-2 border-bottom">Latest Orders</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4 py-5">


                <div className="col">
                    
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${OrderImage1})`, backgroundSize: "cover", backgroundPosition: "center", height: "300px" }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 className=" display-6 lh-1 fw-bold">Dholki Favors</h3>
                            <ul className="d-flex list-unstyled mt-auto">
                                

                                <li className="d-flex align-items-center me-3 ">
                                    <small>Warda</small> </li>

                                <li className="d-flex align-items-center"> 
                                    <small>3d</small> </li> </ul> 
                        </div> 
                    </div> 
                </div>


                <div className="col">
                    
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${OrderImage2})`, backgroundSize: "cover", backgroundPosition: "center", height: "300px" }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 className=" display-6 lh-1 fw-bold">Dholki Favors</h3>
                            <ul className="d-flex list-unstyled mt-auto">
                                

                                <li className="d-flex align-items-center me-3 ">
                                    <small>Warda</small> </li>

                                <li className="d-flex align-items-center"> 
                                    <small>3d</small> </li> </ul> 
                        </div> 
                    </div> 
                </div>


                <div className="col">
                    
                    <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{backgroundImage: `url(${OrderImage3})`, backgroundSize: "cover", backgroundPosition: "center", height: "300px" }}>
                        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                            <h3 className=" display-6 lh-1 fw-bold">Dholki Favors</h3>
                            <ul className="d-flex list-unstyled mt-auto">
                                

                                <li className="d-flex align-items-center me-3 ">
                                    <small>Warda</small> </li>

                                <li className="d-flex align-items-center"> 
                                    <small>3d</small> </li> </ul> 
                        </div> 
                    </div> 
                </div>


                
            </div>
        </div>                                

    )                        
}

 export default Cards
