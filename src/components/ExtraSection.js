import React from 'react'
import img1 from '../assets/img/Group 1306.svg';
import img2 from '../assets/img/w.svg';
import img3 from '../assets/img/Group 1326.svg';
import img4 from '../assets/img/3442.svg';
import img5 from '../assets/img/Group 274.svg';
import img6 from '../assets/img/Group 672.svg';
export default function ExtraSection() {
    return (
        <div className=" extra-section d-none">
            <h1 className="text-center section-heading text-blue">
                Lorem ipsum dolor sit amet
            </h1>
            <div className="container py-40 mt-5">

                <div class="row row-cols-1 row-cols-md-2 row-cols-sm-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={img5} class="card-img-top" alt="..." />
                            <div class="card-body">

                                <p class="card-text">Why location is only part of the equation</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">

                                <p class="card-text">How you can expand and make a fortune</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img3} class="card-img-top" alt="..." />
                            <div class="card-body">

                                <p class="card-text">Why business experience is NOT required</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={img4} class="card-img-top" alt="..." />
                            <div class="card-body">

                                <p class="card-text">Why NOW is the time to take action</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
