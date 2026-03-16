import React from 'react'



export const Header = () => {

    function change(e) {
        document.querySelector("body").classList.toggle("hi")
        document.querySelector(".backgroundChange").classList.toggle("nxt")
        let dark = e.currentTarget.querySelector(".dark")
        let light = e.currentTarget.querySelector(".light")
        dark.classList.toggle("yes")
        light.classList.toggle("yes")
        document.querySelectorAll(".goto").forEach((ele)=>{
            ele.classList.toggle("gotoLight")
        })
        document.querySelector(".personalCard").classList.toggle("personalCardLight")

        document.querySelectorAll(".linkIcons").forEach((ele)=>{
            ele.classList.toggle("linkIconsLight")
        })
        document.querySelector(".home").classList.toggle("llight")
        document.querySelector(".letsWorkTogetherBtn").classList.toggle("Light")

        document.querySelector(".about").classList.toggle("light")
        document.querySelectorAll(".ct").forEach((ele)=>{
            ele.classList.toggle("light")
        })
        document.querySelector(".infoUp").classList.toggle("light")
        document.querySelectorAll(".aaa").forEach((ele)=>{
            ele.classList.toggle("light")
        })
        document.querySelector(".skills").classList.toggle("light")
        // document.querySelectorAll(".skillCard").forEach((ele)=>{
        //     ele.classList.toggle("light")
        // })

        document.querySelector("projects").classList.toggle("Light")
        document.querySelector(".contact").classList.toggle("light")
        document.querySelector(".contactBox").classList.toggle("light")
    }

    return (
        <>
            <header>
                <div className="logo">
                    <img src="https://media.istockphoto.com/id/1402285381/vector/d-logo-design-and-template-creative-d-icon-initials-based-letters-in-vector.jpg?s=612x612&w=0&k=20&c=tIjfOJgtpV_92-Zw0lUFgguWYameGe4DJdAslBSJdPw=" alt="" />
                </div>
                <nav>


                    <div className="backgroundChange" onClick={(e) => change(e)}>
                        <div className="dark yes" >
                            <i className="fa-solid fa-moon"></i>
                        </div>
                        <div className="light">
                            <i className="fa-solid fa-sun"></i>
                        </div>
                    </div>
                    {/* <div className="Hireme">
                        <button>Hire Me <i className="fa-solid fa-envelope"></i></button>
                    </div> */}
                    <div className="mininav">
                        <label htmlFor="DetailsToggle"><i className="fa-solid fa-bars"></i></label>

                    </div>
                    <input type="checkBox" id='DetailsToggle' />
                    <div className='menu'>
                        <span className='Home details'>Home</span>
                        <span className='About details'>About</span>
                        <span className='MySkills details'>My Skills</span>
                        <span className='Project details'>Project</span>
                        <span className='MiniProject details'>Mini Project</span>
                        <span className='Contact details'>Contact</span>
                    </div>
                </nav>
            </header>
        </>
    )
}
