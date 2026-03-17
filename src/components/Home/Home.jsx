import React from 'react'
import AnimateTitle from '../Animate/AnimateTitle'
import { Animate } from '../Animate/AnimateCard'
import AnimateButton from '../Animate/AnimateButton'
import AnimateCardParent from '../Animate/AnimateCardParent'

export const Home = () => {
    return (
        <>
            <div className="home home1" id='home'>
                <AnimateTitle>
                    <div className="title">
                        <i className="fa-brands fa-files-pinwheel"></i>
                        <span className='greetings'>Hi, <span className='yellow nnaammee'>I'm Deepak</span>, Mern Stack Developer</span>
                    </div>
                </AnimateTitle>

                <div className="content">
                    <AnimateTitle>
                        <div className="heading">
                            <h1 className='top'>Building Scalable</h1>
                            <h1 className='bottom'>Web <span className='yellow'>Applications</span></h1>
                        </div>
                    </AnimateTitle>
                    <AnimateCardParent>
                    <Animate>
                        <div className="para">
                            <p>Your gateway to modern web development, seamless user experiences, and powerful backend systems. Transforming complex ideas into fast, reliable, and user-friendly applications.</p>
                        </div>
                    </Animate>
                    </AnimateCardParent>
                </div>

                <Animate>
                    <div className="components">
                        <div className="right cmprt">
                            <i className="fa-brands fa-connectdevelop"></i>
                        </div>
                        <div className="left">
                            <h2>Aspiring Developer</h2>
                        </div>
                    </div>
                </Animate>
                    <div className="letsWorkTogether">
                        <AnimateButton>
                            <button className='letsWorkTogetherBtn'>Lets Work Together</button>
                        </AnimateButton>
                        
                    </div>
            </div>
        </>
    )
}
