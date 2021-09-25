import React, { useState } from 'react'
import img from '../assets/img/Group 2116.png'
import img1 from '../assets/img/Group 2394.png'

const Team = () => {




    return (
        <div className="team">

            <div className="container banner ">

                <div class="d-flex align-items-center justify-content-between">
                    <div >
                        <h1 className="text-green">Lorem </h1>
                        <h1 className="mt-3" >
                            Ipsum dolor

                        </h1>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt vitae semper. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Enim eu turpis egestas pretium aenean pharetra magna ac. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. </p>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien eget mi proin sed libero enim. Etiam sit amet nisl purus in mollis nunc sed id. Placerat in egestas erat imperdiet. Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Felis eget velit aliquet sagittis id consectetur.
                        </p>
                    </div>
                    <div class="img-container">
                        <img src={img} className="sideImg" alt="img" />
                        <img src={img1} className="sideImg1" alt="img" />
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Team;
