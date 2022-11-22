import React, { useState } from 'react'
import avatar from './assets/newchatbot.png'
import Chatbot from './Chatbot'

const Home = () => {
    const [showComp, setShowComp] = useState(false);

    const HandleOnClick = () => {
        console.log("working")
        if (showComp === false) {
            setShowComp(true)
        } else {
            setShowComp(false)
        }
    }

    return (
        <div className='about-wrapper'>
            <div className='about-chatbot'>
            <img className='about-img' src={avatar} alt=">"/>

                
            <h1 className='homeh1' style={{display: 'inline-block'}}>BigHero Chatbot!</h1>

                    
                <p>Empowering websites to stand out with ai opimized support</p>
                <h4>Tech and frameworks</h4>
                <ol style={{marginLeft: '2rem'}}>
                    <p style={{fontSize: '16px'}}><li>Front-end: react js</li></p>
                    <p style={{fontSize: '16px'}}><li>Back-end: Python</li></p>
                    <p style={{fontSize: '16px'}}><li>ML Python Libraries</li></p>
                    <p style={{fontSize: '16px'}}><li>Bootstrap 5.2</li></p>

                </ol>
                <h4>Repository </h4>
                <p>This project is open source and is uploaded on my github repository</p>
                <a style={{borderRadius: '30px', width: '10rem', fontWeight: '700'}} className='about-btn btn btn-outline-info mb-3' href='https://github.com/uxairishere/Chatbot-React-Python'>Repository <i class="fa fa-github"></i></a>
                <h4>About Developer</h4>
                <a style={{borderRadius: '30px', width: '10rem', fontWeight: '700',}} className='about-btn btn btn-outline-info mb-3 me-4' href='http://uxairabbas.herokuapp.com'>Portfolio <i class="fa fa-user"></i></a>
                <a style={{borderRadius: '30px', width: '10rem', fontWeight: '700',}} className='about-btn btn btn-outline-info mb-3 me-4' href='https://github.com/uxairishere'>Github <i class="fa fa-github"></i></a>
                <a style={{borderRadius: '30px', width: '10rem', fontWeight: '700',}} className='about-btn btn btn-outline-info mb-3 me-4' href='https://www.linkedin.com/in/uzairabbas1999/'>Linkedin <i class="fa fa-linkedin"></i></a>
                <a style={{borderRadius: '30px', width: '10rem', fontWeight: '700',}} className='about-btn btn btn-outline-info mb-3 me-4' href='https://www.instagram.com/uxair_abbass'>Instagram <i class="fa fa-instagram"></i></a>

            </div>


            {/* chatbot model  */}
            <div className='chatbot-model'>
                <button className='chatbot-popper-btn' onClick={HandleOnClick} style={{ borderRadius: "50%" }}>
                    <img style={{ borderRadius: "50%" }} src={avatar} alt=">" width={60} />
                </button>
            </div>
            <div>
                {
                    showComp === true ?
                        <Chatbot />
                        : null
                }
            </div>
        </div>
    )
}

export default Home