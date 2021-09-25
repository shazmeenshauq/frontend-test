import React from 'react'
import img1 from '../assets/img/Group 380.png'
import img2 from '../assets/img/Group 741.png'
import img3 from '../assets/img/Group 379.png'

export default function MallsSection() {
    return (
        <div className=" mallsSection">

            <div className="container text-center py-40 mt-5">
                <h1 className="text-center px-2">Lorem ipsum dolor sit amet  </h1>
                <h1 className="px-1">adipiscing elit. Donec odio. Quisque volutpat mattis</h1>


                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut. Suspendisse urna nibh, viverra non, semper suscipit
                </p>

                <div className="container mt-5 images">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={img1} alt="" />
                            <p className="img-desc">Amazon Mall</p>

                        </div>
                        <div className="col-md-6">
                            <img src={img2} alt="" />
                            <p className="img-desc">Centaurus Mall</p>

                        </div>
                        <div className="col-md-3">
                            <img src={img3} alt="" />
                            <p className="img-desc">Giga Mall </p>

                        </div>
                    </div>
                </div>


                <div id="carouselExampleControls" className="carousel slide " data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={img1} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img2} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={img3} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


            </div>

        </div>
    )
}
