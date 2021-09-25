import React from 'react'
import icon from '../assets/img/next.svg'
import img1 from '../assets/img/Group 1373.svg'
import img2 from '../assets/img/question-mark.svg'
import img3 from '../assets/img/chat-2.svg'
import img4 from '../assets/img/share-1.svg'
import img5 from '../assets/img/placeholder.svg'
import img6 from '../assets/img/share.svg'

export default function StepsCards() {
    return (
        <div className="stepsCard">
            <h1 className="section-heading text-white text-center">
                Lorem Ipsum Dolor Sit
            </h1>
            <div className="container py-40">
                <div className="row align-items-center  mb-5">
                    <div className="col-md-9 icon-container">
                        <h4 className='text-green'>STEP 1</h4>
                        <h1> Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        <img src={icon} width="54" height="54" alt="" />

                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-round btn-icon">
                            <img src={img1} alt="" />
                        </button>
                    </div>
                </div>
                <div className="row align-items-center  mb-5">
                    <div className="col-md-9">
                        <h4 className='text-green'>STEP 2</h4>
                        <h1> Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        <img src={icon} width="54" height="54" alt="" />

                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-round btn-icon">
                            <img src={img2} alt="" />
                        </button>
                    </div>
                </div>
                <div className="row align-items-center  mb-5">
                    <div className="col-md-9">
                        <h4 className='text-green'>STEP 3</h4>
                        <h1> Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        <img src={icon} width="54" height="54" alt="" />

                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-round btn-icon">
                            <img src={img3} alt="" />
                        </button>
                    </div>
                </div>
                <div className="row align-items-center  mb-5">
                    <div className="col-md-9">
                        <h4 className='text-green'>STEP 4</h4>
                        <h1> Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        <img src={icon} width="54" height="54" alt="" />

                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-round btn-icon">
                            <img src={img4} alt="" />
                        </button>
                    </div>
                </div>
                <div className="row align-items-center  mb-5">
                    <div className="col-md-9">
                        <h4 className='text-green'>STEP 5</h4>
                        <h1> Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        <img src={icon} width="54" height="54" alt="" />

                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-round btn-icon">
                            <img src={img5} alt="" />
                        </button>
                    </div>
                </div>
                <div className="row align-items-center  mb-5">
                    <div className="col-md-9">
                        <h4 className='text-green'>STEP 6</h4>
                        <h1> Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                        <img src={icon} width="54" height="54" alt="" />

                    </div>

                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 ml-auto mr-auto">
                        <div className="text-center container">
                            <div className="p-4 border rounded">
                                <h1 className="section-heading text-white text-center">
                                    Lorem Ipsum Dolor Sit...
                                </h1>
                                <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, animi.</p>
                            </div>

                        </div>

                    </div>
                </div>




            </div>


        </div>
    )
}
