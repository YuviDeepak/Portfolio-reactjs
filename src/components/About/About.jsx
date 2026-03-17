import React from 'react'
import { motion } from '../../../node_modules/motion/react'
import { Lnks } from '../Links/Lnks'
import { Animate } from '../Animate/AnimateCard'
import AnimateTitle from '../Animate/AnimateTitle'
import AnimateCardParent from '../Animate/AnimateCardParent'

export const About = () => {

    return (
        <>
            <div className="about home" id='about'>
                <AnimateTitle>
                    <div className="title">
                        <i className="fa-brands fa-files-pinwheel"></i>
                        <span className='greetings'>About <span className='yellow'>Me</span></span>
                    </div>
                </AnimateTitle>
                <AnimateTitle>
                    <div className="content">
                        <div className="heading">
                            <h1 className='top'>Crafting Seamless</h1>
                            <h1 className='bottom'>User <span className='yellow'>Experiences</span></h1>
                        </div>
                    </div>
                </AnimateTitle>
                <div className="myInfo">
                    <AnimateTitle>
                        <div className="infoUp tag ">
                            <h1 className='name infoDownTitle'>Deepak B</h1>
                            <p className='nameContent'>Hi, I’m Deepak, a passionate Full Stack Developer who enjoys building responsive and user-friendly web applications. I focus on creating clean, efficient code and turning ideas into practical digital solutions. As a fresher, I’m eager to learn, grow, and contribute to innovative projects.</p>
                        </div>
                    </AnimateTitle>
                    <AnimateCardParent>
                        <div className="infodown">
                            <Animate>
                                <div className="ct ct-1">
                                    <div className="left">
                                        <i className="fa-solid fa-bezier-curve"></i>
                                    </div>
                                    <div className="right">
                                        <h3 className='infoDownTitle'>Frontend Development</h3>
                                        <p className='infoDownCtn'>Building responsive and interactive user interfaces using modern web technologies to deliver smooth user experiences.</p>
                                    </div>
                                </div>
                            </Animate>
                            <Animate>
                                <div className="ct ct-2">
                                    <div className="left">
                                        <i className="fa-solid fa-database"></i>
                                    </div>
                                    <div className="right">
                                        <h3 className='infoDownTitle'>Backend Development</h3>
                                        <p className='infoDownCtn'>Building secure, scalable, and efficient server-side applications and APIs to power modern web platforms.</p>
                                    </div>
                                </div>
                            </Animate>
                            <Animate>
                                <div className="ct ct-3">
                                    <div className="left">
                                        <i className="fa-solid fa-web-awesome"></i>
                                    </div>
                                    <div className="right">
                                        <h3 className='infoDownTitle'>Responsive Web Design</h3>
                                        <p className='infoDownCtn'>Designing websites that work seamlessly across all devices and screen sizes.</p>
                                    </div>
                                </div>
                            </Animate>
                            <Animate>
                                <div className="ct ct-4">
                                    <div className="left">
                                        <i className="fa-brands fa-servicestack"></i>
                                    </div>
                                    <div className="right">
                                        <h3 className='infoDownTitle'>API Integration</h3>
                                        <p className='infoDownCtn'>Connecting applications with APIs and managing data efficiently using databases.</p>
                                    </div>
                                </div>
                            </Animate>
                        </div>
                    </AnimateCardParent>

                </div>
                <div className="education ">
                    <AnimateTitle>
                        <div className="title edu">
                            <span className='greetings'>EDU<span className='yellow'>CAT</span>ION</span>
                        </div>
                    </AnimateTitle>
                    <AnimateCardParent>
                        <div className="infodown">
                            <Animate>
                                <div className="clg ct">
                                    <div className="left">
                                        <i className="fa-solid fa-graduation-cap"></i>
                                    </div>
                                    <div className="right">
                                        <h3 className='infoDownTitle'>B.E Electrical and Electronics </h3>
                                        <p className='infoDownCtn'>2021 - 2025</p>
                                        <p className='infoDownCtn'>CGPA - 8.13</p>
                                    </div>
                                </div>
                            </Animate>
                            <Animate>
                                <div className="twele ct">
                                    <div className="left">
                                        <i className="fa-solid fa-book-open-reader"></i>
                                    </div>
                                    <div className="right">
                                        <h3 className='infoDownTitle'>Higher Secondary Education</h3>
                                        <p className='infoDownCtn'>2020 - 2021</p>
                                        <p className='infoDownCtn'>Percentage - 87.71</p>
                                    </div>
                                </div>
                            </Animate>
                            <Animate>
                                <div className="ten ct">
                                    <div className="left">
                                        <i className="fa-solid fa-book-open"></i>
                                    </div>
                                    <div className="right">
                                        <h3 className='infoDownTitle'>Secondary Education</h3>
                                        <p className='infoDownCtn'>2018 - 2019</p>
                                        <p className='infoDownCtn'>Percentage - 77.60</p>
                                    </div>
                                </div>
                            </Animate>
                            <Animate>
                                <div className="touch ct">
                                    <div className="left">
                                        <i className="fa-solid fa-braille"></i>
                                        <h3 className='infoDownTitle'>Stay in touch</h3>
                                    </div>
                                    <Lnks />
                                </div>
                            </Animate>

                        </div>
                    </AnimateCardParent>
                </div>
            </div>
        </>
    )
}
