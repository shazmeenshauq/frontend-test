import React from 'react'
import bg from '../assets/img/Group 2176.svg';
import email from '../assets/img/email.svg';
import location from '../assets/img/maps-and-flags.svg'
import fb from '../assets/img/facebook.svg';
import insta from '../assets/img/instagram.png'
import twitter from '../assets/img/twitter.svg'
import yb from '../assets/img/youtube.svg'

export default function Footer() {
    return (
        <div className="section-padding footer">
            <div className="container py-40">
                <div className="row">
                    <div className="col-md-5">
                    </div>
                    <div className="col-md-7 upper-list">
                        <div className="row ">
                            <div className="col-md-7 ">
                                <h6 className="text-white ">Get in touch</h6>
                                <div className="d-flex align-items-center justify-content-end">
                                    <p className="text-white">loremipsumpk@gmail.com</p>
                                    <img src={email} width="15" height="11" alt="" />
                                </div>
                                <div className="d-flex align-items-center justify-content-end">
                                    <p className="text-white">Floor 3, One Expressway, Gulberg Greens, Islamabad</p>
                                    <img src={location} width="15" height="11" alt="" />
                                </div>

                            </div>
                            <div className="col-md-5">
                                <h6 className="text-white ">Follow us</h6>
                                <div className="d-flex align-items-center justify-content-end">
                                    <img src={fb} width="30" height="30" alt="" />
                                    <img src={insta} width="30" height="30" alt="" />
                                    <img src={twitter} width="30" height="30" alt="" />
                                    <img src={yb} width="30" height="30" alt="" />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="text-right">
                        <div className="d-flex justify-content-end lower-list">
                            <a href="">Contact</a>
                            <a href="">Disclaimer</a>
                            <a href="">Privacy policy</a>
                            <a href="">@2020 Lorem Ipsum, Pvt. Ltd. All rights reserved</a>
                        </div>
                    </div>
                </div>




            </div>


        </div>
    )
}
