import React, { useState } from 'react'
import img from '../assets/img/Image 45.png'
import arrow from '../assets/img/Polygon 6.svg'
import img1 from '../assets/img/Group 1324.png'
import "animate.css"


const Banner = () => {
    const [text, setText] = useState(1)




    return (
        <div className="container banner">

            <div class="d-flex align-items-center justify-content-between banner-text">
                <div class="banner-content">
                    <h1 onClick={() => setText(text + 1)} style={{ cursor: 'pointer' }}>Lorem ipsum dolor sit amet consectetur</h1>
                    <h1 className="mt-3 sub-heading animate__animated animate__slideInDown" >
                        <span className={`p-1 animate__animated animate__slideInDown  ${text === 1 ? ('bg-light-blue ') : text === 2 ? ('bg-orange ') : ('bg-white text-dark ')}`}>
                            {
                                text === 1 ? ('Lorem') : text === 2 ? ('Lorem Ipsum') : text === 3 ? ('Lorem Impsim Sit') : setText(1)
                            }
                        </span>

                    </h1>
                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    <a className="btn  ">See the best franchises <img src={arrow} width="26" height="26" /></a>
                </div>
                <div class="banner-img">
                    <img src={img} className="sideImg" alt="img" />
                    <img src={img1} className="sideImg sideImg1 d-none" alt="img" />
                </div>

            </div>
        </div>

    )
}

export default Banner;
