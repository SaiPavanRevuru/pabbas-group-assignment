import DetailedItem from '../DetailedItem'
import './index.css'

const DetailedMenu = (props) => {
    const {sectionDetails} = props
    const {title,items} = sectionDetails

    return (
        <div className='bg-container'>
            <h1 className="main-heading">{title}</h1>
            <ul className='items-container'>
                {items.map(eachItem => (
                    <DetailedItem itemDetails = {eachItem}/>
                ))}
            </ul>
        </div>
    )
}

export default DetailedMenu