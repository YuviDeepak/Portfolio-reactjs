import React from 'react'
import { Lnks } from '../Links/Lnks'
import AnimateAside from '../Animate/AnimateAside'
import AnimateAsideChild from '../Animate/AnimateAsideChild'


export const Aside = () => {
    return (
        <AnimateAside >
            <div className="whole ">
                <AnimateAsideChild>
                <div className="aside">
                    <span className='navHome goto'><a href="#home" id='gotoa'><i className="fa-solid fa-house"></i></a></span>
                    <span className='navAbout goto'><a href="#about" id='gotoa'><i className="fa-solid fa-circle-info"></i></a></span>
                    <span className='navMySkills goto '><a href="#skills" id='gotoa'><i className="fa-brands fa-wirsindhandwerk"></i></a></span>
                    <span className='navProject goto '><a href="#project" id='gotoa'><i className="fa-solid fa-diagram-project"></i></a></span>
                    <span className='navMiniProject goto '><a href="#miniproject" id='gotoa'><i className="fa-solid fa-bars-progress"></i></a></span>
                    <span className='navRes goto '><a href="#res" id='gotoa'><i className="fa-regular fa-file"></i></a></span>
                    <span className='navContact goto '><a href="#contact" id='gotoa'><i className="fa-solid fa-address-book"></i></a></span>
                </div>
                </AnimateAsideChild>
                <AnimateAsideChild>
                <div className="personalCard ">
                    <div className="Myimg">
                        <img src="https://m.media-amazon.com/images/I/71b-bd4DRUL._AC_UF894,1000_QL80_.jpg" alt="" />
                    </div>
                    <div className="presonalInfo">
                        <p className='name '>Deepak B</p>
                        <p className='info '>Passionate about building modern web applications using HTML, CSS, JavaScript, and React. Always exploring new tools and technologies to grow as a developer.</p>
                    </div>
                    <Lnks />
                </div>
                </AnimateAsideChild>
            </div>
        </AnimateAside>
    )
}
