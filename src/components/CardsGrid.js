import React from 'react'
import img1 from '../assets/img/Group 1306.svg';
import img2 from '../assets/img/Group 594.svg';
import img3 from '../assets/img/Group 1358.svg';
import img4 from '../assets/img/Group 674.svg';
import img5 from '../assets/img/Group 274.svg';
import img6 from '../assets/img/Group 672.svg';
export default function CardsGrid() {
    return (
        <div className="cards-grid">
            <h1 className="text-center section-heading text-blue">
                Lorem ipsum dolor sit amet
            </h1>
            <div className="container py-40 mt-5">

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title ">Lorem Ipsum Dolor</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Lorem Ipsum Dolor</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Lorem Ipsum Dolor</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img4} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Lorem Ipsum Dolor</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img5} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Lorem Ipsum Dolor</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img6} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Lorem Ipsum Dolor</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
