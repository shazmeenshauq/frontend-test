import React, { useState } from 'react'
import img from '../assets/img/Mask Group 874.png'
import arrow from '../assets/img/Polygon 6.svg'

const CallSection = () => {




    return (
        <div className="section-padding call-section">
            <div className="container banner ">

                <div class="d-flex align-items-center justify-content-between">
                    <div class="">
                        <img src={img} width="572" height="394" alt="img" />
                    </div>
                    <div class="">
                        <p className="text-blue">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <h1 className="text-blue">Lorem ipsum</h1>
                        <h1 className="mt-3 text-blue" >
                            dolor sit amet consectetur


                        </h1>
                        <a className="btn ">Schedule a call today!</a>
                    </div>


                </div>
            </div>

        </div>


    )
}

export default CallSection;
