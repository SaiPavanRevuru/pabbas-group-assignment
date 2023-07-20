import {FaShoppingBag} from 'react-icons/fa'
import {BsChevronDown} from 'react-icons/bs'

const Services = () => {

    return (
        <div>
            <div>
                <FaShoppingBag/>
                <h1>Services</h1>
            </div>
            <p>Pickup</p>
            <hr/>
            <div>
                <p>Delivery</p>
                <BsChevronDown/>
            </div>
        </div>
    )
}

export default Services