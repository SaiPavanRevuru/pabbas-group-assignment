import {GiKnifeFork} from 'react-icons/gi'

import './index.css'

const ReadyToEat = () => (
    <div className='delivery-bg-container'>
        <div className='container'>
            <GiKnifeFork className='icon'/>
            <h1 className='ready-heading'>Ready To Eat?</h1>
            <div className='button-container'>
                <button type = "button" className='button'>Order Online</button>
            </div>
            <p className='para'>No contact delivery available</p>
        </div>
    </div>
)

export default ReadyToEat