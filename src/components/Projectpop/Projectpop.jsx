import React from 'react'

export const Projectpop = ({ pop, setPop, closePop }) => {
    console.log(pop)
    return (
        <>
            {

                (pop) && (
                    <div className="popFull">
                        
                        <div className="popContainer">
                            <div className="popContent">
                                
                                <h3>projectname : {pop.projectName}</h3>
                                <h3>preview : <a href={pop.projectLink}>{pop.projectLink}</a></h3>
                            </div>
                            <div className="popImage">
                                <img src={pop.projectImage} alt="" />
                            </div>
                        </div>
                            <button id='popclose' onClick={closePop}>X</button>
                    </div>
                )
            }
        </>
    )
}
