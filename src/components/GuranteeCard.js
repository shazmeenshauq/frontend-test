import React from 'react'
import img from '../assets/img/OBJECTS.svg'

export default function GuranteeCard() {
    return (
        <div className="section-padding gurantee">
            <h1 className="section-heading text-center text-white">
                Lorem Ipsum Dolor Sit Amet
            </h1>
            <div className="container py-40">
                <div className="text-center">
                    <img src={img} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis Suspendisse urna nibh. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare pellentesque</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis Suspendisse urna nibh. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. </p>
                    <h6>Morbi in sem quis dui placerat ornare pellentesque</h6>
                    <a className="btn ">Schedule a call today! </a>

                </div>


            </div>

        </div>
    )
}
