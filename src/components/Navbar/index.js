import {GrFavorite} from 'react-icons/gr'
import {MdAccountCircle} from 'react-icons/md'

import './index.css'

const Navbar = () => (
    
    <div className='navbar-container'>
        <div className='image-container'>
            <img src = "https://bno-restaurant-images.imgix.net/4ffa3751-5954-4f4d-9604-14c1de9deea7.png?h=50&fit=clip&fm=png&lossless=1" 
            alt = "company logo" className='navbar-img'/>
        </div>
        <div className = "right-navbar-container">
            
                <div className='text-container'><p>Favorite</p></div>
                
                <div className = 'icon-container'><GrFavorite/></div>
                
            
            <div className='text-container'>
                <p>Login/Sign Up</p>
                </div>
                <div className = 'icon-container'>
                <MdAccountCircle/>
            </div>
        </div>
    </div>
    
)

export default Navbar