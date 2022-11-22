import React, {useState} from 'react'
import avatar from './assets/avatar5.png'
import Chatbot from './Chatbot'



const Home = () => {
    const [showComp, setShowComp] = useState(false);

    const HandleOnClick = () => {
        console.log("working")
        if(showComp === false){
            setShowComp(true)
        }else{
            setShowComp(false)
        }
    }

  return (
    <div>
        <div className='chatbot-model'>
            <button onClick={HandleOnClick} style={{borderRadius: "50%"}}>
                <img style={{borderRadius: "50%"}} src={avatar} alt=">" width={60} />
            </button>
        </div>
        <div>
            {
                showComp === true ? 
                <Chatbot/>  
                : null
            }
        </div>
    </div>
  )
}

export default Home