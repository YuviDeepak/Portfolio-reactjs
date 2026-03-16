import React from 'react'
import AnimateTitle from '../Animate/AnimateTitle'
import { Animate } from '../Animate/AnimateCard'
import AnimateCardParent from '../Animate/AnimateCardParent'


export const Skills = () => {
    return (
        <>
            <div className="skills home about" id='skills'>
                <AnimateTitle>


                    <div className="title">
                        <i className="fa-brands fa-files-pinwheel"></i>
                        <span className='greetings'>MY <span className='yellow'>Skills</span></span>
                    </div>
                </AnimateTitle>
                <AnimateTitle>

                    <div className="content">
                        <div className="heading">
                            <h1 className='top'>The Tools Behind</h1>
                            <h1 className='bottom'>Exceptional <span className='yellow'>Work</span></h1>
                        </div>
                    </div>
                </AnimateTitle>


                <AnimateCardParent>
                <div className="skillBBOOXX">
                    
                    <div className="skillGrid">
                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-brands fa-html5"></i>
                                    </div>
                                </div>
                                <div className="cardBottom">
                                    <div className="prec">
                                        <h3 className=''>HTML</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-brands fa-css3"></i>
                                    </div>
                                </div>
                                <div className="cardBottom">
                                    <div className="prec">
                                        <h3 className=''>CSS</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-brands fa-bootstrap"></i>
                                    </div>
                                </div>
                                <div className="cardBottom ">
                                    <div className="prec">
                                        <h3 className=''>Bootstrap</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-brands fa-square-js"></i>
                                    </div>
                                </div>
                                <div className="cardBottom">
                                    <div className="prec">
                                        <h3 className=''>JS</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-brands fa-js"></i>
                                    </div>
                                </div>
                                <div className="cardBottom ">
                                    <div className="prec">
                                        <h3 className=''>JQuery</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-brands fa-react"></i>
                                    </div>
                                </div>
                                <div className="cardBottom">
                                    <div className="prec">
                                        <h3 className=''>REACT JS</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-brands fa-vuejs"></i>
                                    </div>
                                </div>
                                <div className="cardBottom ">
                                    <div className="prec">
                                        <h3 className=''>React vite</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-brands fa-node-js"></i>
                                    </div>
                                </div>
                                <div className="cardBottom ">
                                    <div className="prec">
                                        <h3 className=''>Node JS</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-solid fa-network-wired"></i>
                                    </div>
                                </div>
                                <div className="cardBottom ">
                                    <div className="prec">
                                        <h3 className=''>Express JS</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>


                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-regular fa-compass"></i>
                                    </div>
                                </div>
                                <div className="cardBottom ">
                                    <div className="prec">
                                        <h3 className=''>Mongo DB</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                        <Animate>
                            <div className="skillCard ccrrdd">
                                <div className="cardTop">
                                    <div className="topIcons">
                                        <i className="fa-brands fa-github"></i>
                                    </div>
                                </div>
                                <div className="cardBottom ">
                                    <div className="prec">
                                        <h3 className=''>Git Hub</h3>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                    </div>
                    
                </div>
                </AnimateCardParent>
            </div>
        </>
    )
}
