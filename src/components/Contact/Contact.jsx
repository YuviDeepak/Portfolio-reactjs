import React from 'react'
import AnimateTitle from '../Animate/AnimateTitle'
import AnimateCardParent from '../Animate/AnimateCardParent'
import { Animate } from '../Animate/AnimateCard'

export const Contact = () => {
    return (
        <>
            <div className="contact home about" id='contact'>
                <AnimateTitle>
                    <div className="title">
                        <i className="fa-brands fa-files-pinwheel"></i>
                        <span className='greetings'>Co<span className='yellow'>nta</span>ct</span>
                    </div>
                </AnimateTitle>
                <AnimateTitle>
                    <div className="content">
                        <div className="heading">
                            <h1 className='top'>Let's <span className='yellow'>connect.</span></h1>
                        </div>
                    </div>
                </AnimateTitle>
                <AnimateTitle>
                    <div className="contactBox">
                        <AnimateTitle>
                            <div className="boxTitle">
                                <h3 className='bxTit'>Let’s <span className='yellow'>Work</span> Together!</h3>
                            </div>
                        </AnimateTitle>
                        <div className="contactGrid">
                            <AnimateTitle>
                                <input type="text" placeholder='Full Name' id='name' />
                            </AnimateTitle>
                            <AnimateTitle>
                                <input type="text" placeholder='Email Address' id='email' />
                            </AnimateTitle>
                            <AnimateTitle>
                                <input type="text" placeholder='Phone Number' id='phno' />
                            </AnimateTitle>
                            <AnimateTitle>
                                <input type="text" placeholder='Subject' id='subject' />
                            </AnimateTitle>
                                <textarea placeholder='Message' id='msg'></textarea>
                        </div>
                        <button className='send'>Send <i className="fa-solid fa-paper-plane"></i></button>
                    </div>
                </AnimateTitle>

            </div>
        </>
    )
}
