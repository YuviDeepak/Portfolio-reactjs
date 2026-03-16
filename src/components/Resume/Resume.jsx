import React from 'react'
import cv from '../../assets/Deepak_B_Resume.pdf'
import AnimateTitle from '../Animate/AnimateTitle'
import { Animate } from '../Animate/AnimateCard'
import AnimateButton from '../Animate/AnimateButton'
import AnimateCardParent from '../Animate/AnimateCardParent'

const Resume = () => {
  return (
    <>
      {/* <div className="resume">
      <h1>Resume</h1>
    <div className="resumeWrapper">

    <iframe src={cv}></iframe>
    </div>
    </div> */}
      <div className="home" id='res'>
        <AnimateTitle>
          <div className="title">
            <i className="fa-brands fa-files-pinwheel"></i>
            <span className='greetings'>RE<span className='yellow nnaammee'>SU</span>ME</span>
          </div>
        </AnimateTitle>
        <div className="resumeWrapper">
          <iframe src={cv}></iframe>
        </div>

      </div>
    </>
  )
}

export default Resume