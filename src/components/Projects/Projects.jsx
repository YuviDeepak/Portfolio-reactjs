import React, { useState } from 'react'
import { Projectpop } from '../Projectpop/Projectpop'
import AnimateCardParent from '../Animate/AnimateCardParent'
import { Animate } from '../Animate/AnimateCard'

export const Projects = () => {
    const [pop, setPop] = useState(null)

    const projectArray = [
        {
            projectImage: "https://img.freepik.com/free-photo/view-3d-video-game-controller_23-2151005793.jpg",
            projectName: "E-commerce website",
            projectLink: "https://gamax-sepia.vercel.app/"
        },
        {
            projectImage: "https://t4.ftcdn.net/jpg/06/48/37/73/360_F_648377395_8tt4I8sEKvLSjqe2XKQZX0zm33HjtPsm.jpg",
            projectName: "E-commerce website",
            projectLink: "https://gamax-sepia.vercel.app/"
        },
        {
            projectImage: 1,
            projectName: "E-commerce website",
            projectLink: "https://gamax-sepia.vercel.app/"
        },
        {
            projectImage: 1,
            projectName: "E-commerce",
            projectLink: "https://artic-jewellery.vercel.app/"
        }

    ]
    return (
        <>
            <div className="projects home" id='project'>
                <div className="title">
                    <i className="fa-brands fa-files-pinwheel"></i>
                    <span className='greetings'>My <span className='yellow'>Projects</span> </span>
                </div>
                <div className="content">
                    <div className="heading">
                        <h1 className='top'>Innovative Ideas</h1>
                        <h1 className='bottom'>and <span className='yellow'>Solutions</span></h1>
                    </div>
                </div>
                 <AnimateCardParent>
                <div className="projectGrid">
                   

                        {
                            projectArray.map((e, index) => (
                                <Animate key={index}>
                                    <div className="projectCard" onClick={() => setPop(e)} key={index}>
                                        <div className="projectImage ">
                                            <img src={e.projectImage} alt="" />
                                        </div>
                                        <div className="projectName" >
                                            <a href={e.projectLink} className='prj' target='blank'>{e.projectName}</a>
                                        </div>
                                    </div>
                                </Animate>
                            ))
                        }
                    
                        <Projectpop pop={pop} setPop={setPop} closePop={() => setPop(null)} />
                </div>
                </AnimateCardParent>
                
            </div>
        </>
    )
}
