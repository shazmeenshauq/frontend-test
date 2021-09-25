import React, { useState } from 'react'
import img from '../assets/img/Image 45.png'
import arrow from '../assets/img/Polygon 6.svg'

const Banner2 = () => {
    const [text, setText] = useState(1)




    return (
        <div className="banner2 section-padding">

            <div className="container banner  ">

                <div class="row">
                    <div class="col-md-8">
                        <h1 >Lorem ipsum dolor sit amet consectetur</h1>
                        <h1 className="mt-3 text-green text-uppercase" >
                            Lorem, ipsum.


                        </h1>
                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
                        <p className="mt-5">Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra.</p>
                        <a className="btn ">Schedule a call today! </a>
                    </div>


                </div>
            </div>
        </div>


    )
}

export default Banner2;
