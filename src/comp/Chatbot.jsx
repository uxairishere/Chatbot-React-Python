import React, { useState } from 'react'
import avatar from './assets/avatar.jpg'
import avatar2 from './assets/avatar5.png'



const Chatbot = () => {
    const [input, setInput] = useState('')
    const [convo, setConvo] = useState([])

    const HandleOnChange = (event) => {
        setInput(event.target.value)
    }
    const HandleOnSubmit = () => {
        convo.push(input)
        setInput('')
    }

    const HandleClearConvo = () => {
        setConvo([])
    }


    return (
        <>
            <div className='chatbot-container'>

                <div className='chatbot-nav' >
                    <img className='bot-avatar' style={{ display: 'inline-block' }} width={50} src={avatar} alt=">" />
                    <h3 style={{ display: 'inline-block' }} >Love</h3>
                </div>

                <div className='chatbot-conv'>
                    <div className='bot-content-wrapper'>
                        <img className='bot-avatar' width={30} src={avatar} alt=">" />
                        <div className='bot-response-alert'>Hi user, how are you doing</div>
                    </div>
                    {
                        convo.map((val, index) => (
                            <div style={{textAlign: 'right'}} key={index} className='bot-content-wrapper'>
                                <div className='bot-content-alert'>{val}</div>
                                <img className='bot-avatar' width={30} src={avatar2} alt=">" />
                            </div>
                        ))
                    }

                </div>

                <div className='chatbot-input'>
                    <input style={{ width: '75%', display: 'inline-block' }} onChange={HandleOnChange} type='text' className='form-control bot-input' />
                    <button className='btn btn-dark bot-submit' style={{ display: 'inline-block' }} onClick={HandleOnSubmit}>Send</button>
                    <button onClick={HandleClearConvo}>clear</button>
                </div>

            </div>
        </>
    )
}

export default Chatbot