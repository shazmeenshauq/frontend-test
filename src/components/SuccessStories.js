import React from 'react'
import img1 from '../assets/img/Mask Group 21.png'
import img2 from '../assets/img/Mask Group 20.png'
import img3 from '../assets/img/Mask Group 16.png'
import img4 from '../assets/img/Group 16.png'
import img5 from '../assets/img/Mask Group 19.png'

export default function SuccessStories() {
    return (
        <div className="section-padding success-stories">
            <h1 className="section-heading text-center text-white">Success Stories</h1>
            <p className="text-white sub-heading text-center">Ez-Franchise Client Testimonials</p>
            <div className="">
                <div class="row row-cols-1 row-cols-md-5 g-0">
                    <div class="col">
                        <div class="card p-4 bg-green h-100">
                            <div className="card-header text-center bg-transparent border-0">
                                <i class="fas fa-quote-left text-white "></i>

                            </div>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.</p>
                            </div>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div className="text-center">
                                <h5 class="card-title">Lorem Ipsum</h5>
                                <p class="card-text">Lorem ipsum dolor sit</p>
                            </div>



                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-4 bg-blue h-100">
                            <div className="card-header text-center bg-transparent border-0">
                                <i class="fas fa-quote-left text-white "></i>

                            </div>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.</p>
                            </div>
                            <img src={img2} class="card-img-top" alt="..." />
                            <div className="text-center">
                                <h5 class="card-title">Lorem Ipsum</h5>
                                <p class="card-text">Lorem ipsum dolor sit</p>
                            </div>



                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-4 bg-light-blue h-100">
                            <div className="card-header text-center bg-transparent border-0">
                                <i class="fas fa-quote-left text-white "></i>

                            </div>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.</p>
                            </div>
                            <img src={img3} class="card-img-top" alt="..." />
                            <div className="text-center">
                                <h5 class="card-title">Lorem Ipsum</h5>
                                <p class="card-text">Lorem ipsum dolor sit</p>
                            </div>



                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-4 bg-green h-100">
                            <div className="card-header text-center bg-transparent border-0">
                                <i class="fas fa-quote-left text-white "></i>

                            </div>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.</p>
                            </div>
                            <img src={img4} class="card-img-top" alt="..." />
                            <div className="text-center">
                                <h5 class="card-title">Lorem Ipsum</h5>
                                <p class="card-text">Lorem ipsum dolor sit</p>
                            </div>



                        </div>
                    </div>
                    <div class="col">
                        <div class="card p-4 bg-light-purple h-100">
                            <div className="card-header text-center bg-transparent border-0">
                                <i class="fas fa-quote-left text-white "></i>

                            </div>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Integer enim.</p>
                            </div>
                            <img src={img5} class="card-img-top" alt="..." />
                            <div className="text-center">
                                <h5 class="card-title">Lorem Ipsum</h5>
                                <p class="card-text">Lorem ipsum dolor sit</p>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
