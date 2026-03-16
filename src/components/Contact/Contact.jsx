import React from 'react'

export const Contact = () => {
    return (
        <>
            <div className="contact home about" id='contact'>
                <div className="title">
                    <i className="fa-brands fa-files-pinwheel"></i>
                    <span className='greetings'>Co<span className='yellow'>nta</span>ct</span>
                </div>
                <div className="content">
                    <div className="heading">
                        <h1 className='top'>Let's <span className='yellow'>connect.</span></h1>
                    </div>
                </div>
                <div className="contactBox">
                    <div className="boxTitle">
                        <h3 className='bxTit'>Let’s <span className='yellow'>Work</span> Together!</h3>
                    </div>
                    <div className="contactGrid">
                        <input type="text" placeholder='Full Name' id='name'/>
                        <input type="text" placeholder='Email Address' id='email'/>
                        <input type="text" placeholder='Phone Number' id='phno'/>
                        <input type="text" placeholder='Subject' id='subject'/>
                        <textarea placeholder='Message' id='msg'></textarea>
                        <button>Send <i class="fa-solid fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}
