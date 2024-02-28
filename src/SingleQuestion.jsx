import { useState } from 'react'
import { GrDeploy } from "react-icons/gr";
import { GrGoogleWallet } from "react-icons/gr";


function SingleQuestion({ title, info }) {
    const [showInfo, setShowInfo] = useState(false)

  return (
    <article className='question'>
        <header>
            <h5>{title}</h5>
            <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? <GrDeploy /> : <GrGoogleWallet />}
            </button>
        </header>
        {showInfo && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
